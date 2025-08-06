import { useParams } from 'react-router-dom'
import {useEffect, useState} from "react";
import {ApiService} from "../../service/api.service";
import {Box, Container} from "@mui/material";
import {ChannelCard, Loader, Videos} from "../index";

const Channel = () => {
  const { id } = useParams()
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const channelData = await ApiService.fetching(`channels?part=snippet,statistics&id=${id}`);
        setChannelDetail(channelData.items[0])
        console.log(channelData.items[0])
        const videoData = await ApiService.fetching(`search?part=snippet&channelId=${id}&type=video`);
        setVideos(videoData.items)
        console.log(videoData.items)
      } catch (e) {
        console.log(e)
      }
    }
    getData();
  }, [id]);

  if (!channelDetail) return <Loader />
  if (!videos) return <Loader />

  return (
    <Box minHeight='90vh' mt='10vh'>
      <Box
          width='100%'
          height='200px'
          zIndex={10}
          sx={{
              backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
              backgroundPosition: 'center',
          }}
      >
        <ChannelCard channelDetail={channelDetail} marginTop={'-100px'} />
      </Box>
        <Container
            maxWidth={'90%'}
            sx={{
                marginTop: '90px',
                zIndex: 10,
                position: 'relative',
                boxShadow: 'none',
                borderRadius: '0',
                background: 'rgba(255, 255, 255, 0.8)',
                padding: '20px',
                paddingTop: '50px',
                paddingBottom: '50px',
                marginBottom: '100px',
            }}
        >
            <Videos videos={videos} />
        </Container>
    </Box>
  )
}

export default Channel