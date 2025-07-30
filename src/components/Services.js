import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import GavelIcon from '@mui/icons-material/Gavel';
import BusinessIcon from '@mui/icons-material/Business';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import WorkIcon from '@mui/icons-material/Work';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SecurityIcon from '@mui/icons-material/Security';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease-in-out',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
  },
}));

const ServiceIcon = styled(Box)(({ theme }) => ({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  fontSize: '2rem',
  color: 'white',
}));

const Services = () => {
  const theme = useTheme();

  const services = [
    {
      title: 'Ceza Hukuku',
      description: 'Ceza davalarında uzman savunma, delil analizi ve hukuki strateji geliştirme hizmetleri sunuyoruz.',
      icon: <SecurityIcon />,
      color: '#e53e3e',
      bgColor: '#fed7d7',
    },
    {
      title: 'Ticaret Hukuku',
      description: 'Şirket kuruluşu, ticari sözleşmeler, uyuşmazlık çözümü ve ticari hukuk danışmanlığı.',
      icon: <BusinessIcon />,
      color: '#3182ce',
      bgColor: '#bee3f8',
    },
    {
      title: 'Aile Hukuku',
      description: 'Boşanma, nafaka, velayet, miras ve aile içi uyuşmazlıkların çözümü için hukuki destek.',
      icon: <FamilyRestroomIcon />,
      color: '#d69e2e',
      bgColor: '#fef5e7',
    },
    {
      title: 'İş Hukuku',
      description: 'İşçi-işveren uyuşmazlıkları, iş kazaları, toplu iş hukuku ve işçi hakları savunması.',
      icon: <WorkIcon />,
      color: '#38a169',
      bgColor: '#c6f6d5',
    },
    {
      title: 'İdari Hukuk',
      description: 'Kamu hukuku, idari işlemler, vergi uyuşmazlıkları ve kamu kurumları ile ilgili davalar.',
      icon: <AccountBalanceIcon />,
      color: '#805ad5',
      bgColor: '#e9d8fd',
    },
    {
      title: 'Sözleşme Hukuku',
      description: 'Sözleşme hazırlama, müzakereler, uyuşmazlık çözümü ve hukuki danışmanlık hizmetleri.',
      icon: <GavelIcon />,
      color: '#dd6b20',
      bgColor: '#feebc8',
    },
  ];

  const handleServiceClick = (serviceTitle) => {
    // Scroll to contact section for consultation
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="services"
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
            Hukuki Hizmetlerimiz
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
            Deneyimli avukat kadromuzla, her alanda hukuki çözümler sunuyoruz. 
            Müvekkillerimizin haklarını en iyi şekilde savunmak için çalışıyoruz.
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceCard>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <ServiceIcon
                    sx={{
                      backgroundColor: service.bgColor,
                      color: service.color,
                    }}
                  >
                    {service.icon}
                  </ServiceIcon>
                  
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: theme.palette.primary.main,
                    }}
                  >
                    {service.title}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.6,
                      mb: 3,
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
                
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    variant="text"
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => handleServiceClick(service.title)}
                    sx={{
                      color: service.color,
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: service.bgColor,
                      },
                    }}
                  >
                    Detaylı Bilgi
                  </Button>
                </CardActions>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
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
            Hukuki Sorunlarınız İçin Biz Buradayız
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
            Ücretsiz ilk danışmanlık için hemen iletişime geçin
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: 'white',
              px: 4,
              py: 2,
              fontSize: '1.1rem',
              '&:hover': {
                backgroundColor: theme.palette.secondary.dark,
              },
            }}
          >
            <GavelIcon sx={{ mr: 1 }} />
            Ücretsiz Danışmanlık Al
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Services; 