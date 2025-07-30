import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const TestimonialCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease-in-out',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '20px',
    left: '20px',
    width: '40px',
    height: '40px',
    background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '1.2rem',
  },
}));

const QuoteIcon = styled(FormatQuoteIcon)(({ theme }) => ({
  position: 'absolute',
  top: '30px',
  left: '30px',
  color: 'white',
  fontSize: '1.2rem',
  zIndex: 1,
}));

const Testimonials = () => {
  const theme = useTheme();

  const testimonials = [
    {
      name: 'Göksu Arslan',
      position: 'Avukat',
      rating: 5,
      text: 'Meslektaşım olarak, hukuki alandaki uzmanlıklarını ve profesyonel yaklaşımlarını takdir ediyorum.',
      avatar: 'ZA',
    },
  ];

  const stats = [
    { number: '98%', label: 'Müşteri Memnuniyeti' },
    { number: '500+', label: 'Başarılı Dava' },
    { number: '15+', label: 'Yıl Deneyim' },
    { number: '24/7', label: 'Hukuki Destek' },
  ];

  return (
    <Box
      id="testimonials"
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: theme.palette.primary.main,
            }}
          >
            Müşteri Yorumları
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Müvekkillerimizin deneyimleri ve başarı hikayeleri bizim için en değerli referanslardır.
          </Typography>
        </Box>

        {/* Stats Section */}
        <Box sx={{ mb: 6 }}>
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.secondary.main,
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Testimonials Grid */}
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <TestimonialCard>
                <QuoteIcon />
                <CardContent sx={{ p: 4, pt: 6 }}>
                  <Rating
                    value={testimonial.rating}
                    readOnly
                    sx={{ mb: 2 }}
                    icon={<StarIcon sx={{ color: theme.palette.secondary.main }} />}
                  />
                  
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      fontStyle: 'italic',
                      lineHeight: 1.6,
                      color: theme.palette.text.secondary,
                      fontSize: '1rem',
                    }}
                  >
                    "{testimonial.text}"
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      sx={{
                        width: 48,
                        height: 48,
                        backgroundColor: theme.palette.primary.main,
                        mr: 2,
                      }}
                    >
                      {testimonial.avatar}
                    </Avatar>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                        {testimonial.position}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </TestimonialCard>
            </Grid>
          ))}
        </Grid>

        {/* Overall Rating */}
        <Box
          sx={{
            mt: 8,
            p: 4,
            backgroundColor: theme.palette.primary.main,
            borderRadius: '16px',
            textAlign: 'center',
            color: 'white',
          }}
        >
          <Typography variant="h4" sx={{ mb: 2, fontWeight: 600 }}>
            Genel Değerlendirme
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
            <Rating
              value={5}
              readOnly
              size="large"
              icon={<StarIcon sx={{ color: theme.palette.secondary.main, fontSize: '2rem' }} />}
            />
          </Box>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            500+ müşteri tarafından 5 yıldız değerlendirme
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials; 