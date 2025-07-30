import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import GavelIcon from '@mui/icons-material/Gavel';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #1a365d 0%, #2d5a8b 50%, #1a365d 100%)',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    opacity: 0.3,
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  color: 'white',
}));

const StatsCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  color: 'white',
  borderRadius: '16px',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const stats = [
    { number: '500+', label: 'Başarılı Dava' },
    { number: '15+', label: 'Yıl Deneyim' },
    { number: '98%', label: 'Müşteri Memnuniyeti' },
  ];

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection id="home">
      <Container maxWidth="lg">
        <HeroContent>
          <Grid container spacing={4} alignItems="center">
            {/* Left Content */}
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 700,
                    mb: 3,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.2,
                  }}
                >
                  Hukuki Sorunlarınız İçin
                  <Box component="span" sx={{ color: theme.palette.secondary.main }}>
                    {' '}Uzman Çözümler
                  </Box>
                </Typography>
                
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    opacity: 0.9,
                    fontWeight: 400,
                    lineHeight: 1.4,
                  }}
                >
                  20 yılı aşkın deneyimimizle, hukuki sorunlarınızı çözmek için buradayız. 
                  Güvenilir, profesyonel ve etkili hukuki danışmanlık hizmeti sunuyoruz.
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleContactClick}
                    sx={{
                      backgroundColor: theme.palette.secondary.main,
                      color: 'white',
                      px: 4,
                      py: 2,
                      fontSize: '1.1rem',
                      '&:hover': {
                        backgroundColor: theme.palette.secondary.dark,
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <GavelIcon sx={{ mr: 1 }} />
                    Ücretsiz Danışmanlık
                  </Button>
                  
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      px: 4,
                      py: 2,
                      fontSize: '1.1rem',
                      '&:hover': {
                        borderColor: theme.palette.secondary.main,
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    <PhoneIcon sx={{ mr: 1 }} />
                    Hemen Ara
                  </Button>
                </Box>
              </Box>

              {/* Contact Info */}
              <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PhoneIcon sx={{ color: theme.palette.secondary.main }} />
                  <Typography variant="body1">+90 212 555 0123</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EmailIcon sx={{ color: theme.palette.secondary.main }} />
                  <Typography variant="body1">info@hukukburosu.com</Typography>
                </Box>
              </Box>
            </Grid>

            {/* Right Content - Stats Cards */}
            <Grid item xs={12} md={6}>
              <Grid container spacing={3}>
                {stats.map((stat, index) => (
                  <Grid item xs={12} sm={4} key={index}>
                    <StatsCard>
                      <Typography
                        variant="h3"
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
                          opacity: 0.9,
                          fontWeight: 500,
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </StatsCard>
                  </Grid>
                ))}
              </Grid>

              {/* Additional Info */}
              <Box sx={{ mt: 4, p: 3, backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: 2 }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Neden Bizi Seçmelisiniz?
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    ✓ Ücretsiz İlk Danışmanlık
                  </Typography>
                  <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    ✓ 7/24 Hukuki Destek
                  </Typography>
                  <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    ✓ Şeffaf Fiyatlandırma
                  </Typography>
                  <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    ✓ Deneyimli Avukat Kadrosu
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero; 