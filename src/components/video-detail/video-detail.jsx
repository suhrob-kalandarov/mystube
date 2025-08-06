import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ApiService } from "../../service/api.service";
import  CheckCircle from "@mui/icons-material/CheckCircle";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import { FavoriteOutlined, MarkChatRead, Tag, Visibility } from "@mui/icons-material";
import ReactPlayer from 'react-player'
import {Loader} from "../index";

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

  if (!videoDetail) return <Loader />

  const {
    snippet: { title, channelId, channelTitle, description, thumbnails, tags},
    statistics: {viewCount, likeCount, commentCount},
  } = videoDetail

  return (
      <Box minHeight={'90vh'} mb={10}>
        <Box display={'flex'} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
          <Box width={{ xs: '100%', md: '75%'}}>
            <ReactPlayer
                src={`https://www.youtube.com/watch?v=${id}`}
                className="react-player"
                controls
            />
            {tags && tags.map((item, idx) => (
                <Chip
                    label={item}
                    key={idx}
                    sx={{
                      marginTop: '10px',
                      cursor: 'pointer',
                      ml: '10px'
                    }}
                    deleteIcon={<Tag />}
                    onDelete={() => {}}
                    variant='outlined'
                />
            ))}
            <Typography variant='h5' fontWeight='bold' p={2}>
              {title}
            </Typography>
            <Typography variant='subtitle2' p={2} sx={{opacity: 0.7}}>
              {description}
            </Typography>

            <Stack direction='row' alignItems='center' gap='20px' py={1} px={2}>
              <Stack sx={{opacity: 0.7}} direction='row' alignItems='center' gap='3px'>
                <Visibility />
                {parseInt(viewCount).toLocaleString('en-US')} views
              </Stack>
              <Stack sx={{opacity: 0.7}} direction='row' alignItems='center' gap='3px'>
                <FavoriteOutlined />
                {parseInt(likeCount).toLocaleString('en-US')} like
              </Stack>
              <Stack sx={{opacity: 0.7}} direction='row' alignItems='center' gap='3px'>
                <MarkChatRead />
                {parseInt(commentCount).toLocaleString('en-US')} comments
              </Stack>
            </Stack>
            <Stack direction='row' py={1} px={2}>
              <Stack direction='row' alignItems='center' gap='5px' marginTop='5px'>
                <Avatar
                    alt={channelTitle}
                    src={thumbnails.default.url}
                />
                <Typography variant='subtitle2' color='gray'>
                  {channelTitle}
                  <CheckCircle sx={{fontSize: '14px', color: 'gray', ml: '5px', mb: '-2px'}} />
                </Typography>
              </Stack>
            </Stack>
          </Box>
          <Box width={{ xs: '100%', md: '25%'}}>Suggested videos</Box>
        </Box>
      </Box>
  )
}

export default VideoDetail