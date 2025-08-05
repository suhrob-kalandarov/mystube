import {Avatar, Card, CardContent, CardMedia, Stack, Typography} from "@mui/material";
import CheckCircle from '@mui/icons-material/CheckCircle';
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

        <CardMedia image={video?.snippet?.thumbnails?.high?.url} alt={video?.snippet?.title}
                       sx={{
                           width: { xs: '300px', md: '320px', lg: '360px', xl: '380px' },
                           height: '200px'
                       }}
            />
            <CardContent
                sx={{background:colors.primary, height:'200px', position:'relative'}}
            >
                <>
                    <Typography my={'5px'} sx={{ opacity: '4' }}>
                        {moment(video?.snippet?.publishedAt).fromNow()}
                    </Typography>
                    <Typography variant={'subtitle1'} fontWeight={'bold'}>{video?.snippet?.title.slice(0, 50)}</Typography>
                    <Typography variant={'subtitle2'} sx={{opacity: '0.6'}}>{video?.snippet?.description.slice(0, 70)}</Typography>
                </>
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
                            <CheckCircle />
                        </Typography>
                    </Stack>
                </>
            </CardContent>
        </Card>
    )
}

export default VideoCard