import {Box, Stack} from "@mui/material";
import {VideoCard} from "../";

function Video({ videos }) {
    return (
        <Stack
            width={'100%'}
            direction={'row'}
            flexWrap={'wrap'}
            justifyContent={'start'}
            alignItems={'center'}
            gap={2}
        >
            {videos.map(item => (
                <Box key={item.id.videoId}> {item.id.videoId && <VideoCard video={item} />}</Box>
            ))}
        </Stack>
    );
}

export default Video;