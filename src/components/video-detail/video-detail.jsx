import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ApiService} from "../../service/api.service";
import {Box} from "@mui/material";
import ReactPlayer from 'react-player'

const VideoDetail = () => {
  const [ videoDetail, setVideoDetail ] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`videos?part=snippet,statistics&id=${id}`);
        setVideoDetail(data.items[0])
      } catch (e) {
        console.log(e)
      }
    }
    getData();
  }, [id]);

/*  const {
    snippet: { title, channelId, channelTitle, description, thumbnails, tags},
    statistics: {viewCount, likeCount, dislikeCount, commentCount},
  } = videoDetail*/

  return (
      <Box minHeight={'90vh'} mb={10}>
        <Box display={'flex'}>
          <Box width={'75%'}>
            <ReactPlayer
                src={`https://www.youtube.com/watch?v=${id}`}
                controls
                width="100%"
                height="70vh"
            />
          </Box>
          <Box width={'25%'}>Suggested videos</Box>
        </Box>
      </Box>
  )
}

export default VideoDetail