import {Avatar, Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import CheckCircle from '@mui/icons-material/CheckCircle';
import {Link} from "react-router-dom";
import {colors} from "../../constants/colors";
import moment from "moment";

const VideoCard = ({video}) => {
    return (
        <Card sx={{
            width: {
                xs: '100%',
                sm: '320px',
                md: '340px',
                lg: '360px',
            },
            boxShadow: 'none',
            borderRadius: '0'
        }}>

            <Link to={`/video/${video.id.videoId}`}>
                <CardMedia image={video?.snippet?.thumbnails?.high?.url} alt={video?.snippet?.title}
                           sx={{
                               width: { xs: '300px', md: '320px', lg: '360px', xl: '380px' },
                               height: '200px'
                           }}
                />
            </Link>
            <CardContent
                sx={{background:colors.primary, height:'200px', position:'relative'}}
            >
                <Link to={`/video/${video.id.videoId}`}>
                    <Typography my={'5px'} sx={{ opacity: '4' }}>
                        {moment(video?.snippet?.publishedAt).fromNow()}
                    </Typography>
                    <Typography variant={'subtitle1'} fontWeight={'bold'}>{video?.snippet?.title.slice(0, 50)}</Typography>
                    <Typography variant={'subtitle2'} sx={{opacity: '0.6'}}>{video?.snippet?.description.slice(0, 70)}</Typography>
                </Link>
                <>
                    <Stack
                        direction={'row'}
                        position={'absolute'}
                        bottom={'10px'}
                        alignItems={'center'}
                        gap={'5px'}
                    >
                        <Avatar src={video?.snippet?.thumbnails?.default?.url} />
                        <Typography variant={'subtitle2'} color={'gray'}>
                            {video?.snippet?.channelTitle}
                            <CheckCircle sx={{fontSize: '14px', color: 'gray', ml: '5px', mb: '-2px'}} />
                        </Typography>
                    </Stack>
                </>
            </CardContent>
        </Card>
    )
}

export default VideoCard