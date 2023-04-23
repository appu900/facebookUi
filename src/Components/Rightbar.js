import React from 'react'
import { Box, Typography,Avatar,AvatarGroup, ImageList, ImageListItem ,List,ListItem,ListItemAvatar,ListItemText,Divider} from '@mui/material'

function Rightbar() {
  return (
    <Box  

    flex={2} p={2} sx={{display:{
        xs:"none",
        sm:"block"
    }}}>
      <Box position="fixed" width={300}>
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        <AvatarGroup total={24}>
            <Avatar alt="Remy Sharp" src="/images/appu.jpg" />
            <Avatar alt="Travis Howard" src="/images/one.jpg" />
            <Avatar alt="Agnes Walker" src="/images/two.jpg" />
            <Avatar alt="Trevor Henderson" src="/images/two.jpg" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt="2">Latest Photos</Typography>
        <ImageList cols={3} rowHeight={200} gap={5}>
          <ImageListItem>
            <img src='images/two.jpg'/>
          </ImageListItem>
          <ImageListItem>
            <img src='images/two.jpg'/>
          </ImageListItem>
          <ImageListItem>
            <img src='images/two.jpg'/>
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt="2">Latest chats</Typography>


        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/images/two.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/images/one.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/images/appu.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
    
  )
}

export default Rightbar