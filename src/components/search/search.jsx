import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Videos } from '../';
import { ApiService } from '../../service/api.service';
import { colors } from '../../constants/colors';

const Search = () => {
  const [videos, setVideos] = useState([]);
  const {id} = useParams()

  useEffect(() => {
    const getData = async () => {
      const data = await ApiService.fetching(`search?part=snippet&q=${id}`);
      setVideos(data.items);
    }
    getData();
  }, [id])

  return (
    <Box p={2} sx={{height: '90vh'}}>
      <Container maxWidth={'90%'}>
        <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
          Search results for: <span style={{color: colors.secondary}}>{id}</span> videos
        </Typography>
        
      </Container>
    </Box>
  )
}

export default Search