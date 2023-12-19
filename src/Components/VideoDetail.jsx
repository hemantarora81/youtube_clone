import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Loader, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
const VideoDetail = () => {
  const [VideoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(videos);
  if (!VideoDetail?.snippet) return <Loader />;
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = VideoDetail;
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: "78px",
            }}
            className="react-player-box"
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#000" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#000", textDecoration: "underline" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`} target="_blank">
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#000"
                  fontWeight="bold"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "#000", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography
                  variant="body1"
                  sx={{ opacity: 0.7 }}
                  fontWeight="bold"
                >
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ opacity: 0.7 }}
                  fontWeight="bold"
                >
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
