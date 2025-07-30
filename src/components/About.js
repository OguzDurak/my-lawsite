import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import GavelIcon from '@mui/icons-material/Gavel';
import SecurityIcon from '@mui/icons-material/Security';
import HandshakeIcon from '@mui/icons-material/Handshake';
import StarIcon from '@mui/icons-material/Star';

const AboutSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(26, 54, 93, 0.05) 0%, rgba(45, 90, 139, 0.05) 100%)',
    zIndex: 0,
  },
}));

const ValueCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease-in-out',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
  },
}));

const About = () => {
  const theme = useTheme();

  const values = [
    {
      title: 'Güvenilirlik',
      description: 'Müvekkillerimizin güvenini kazanmak ve korumak en önemli değerimizdir.',
      icon: <SecurityIcon />,
      color: '#3182ce',
    },
    {
      title: 'Profesyonellik',
      description: 'Her işimizde en yüksek profesyonel standartları uyguluyoruz.',
      icon: <GavelIcon />,
      color: '#d69e2e',
    },
    {
      title: 'Şeffaflık',
      description: 'Tüm süreçlerde şeffaf ve dürüst iletişim kuruyoruz.',
      icon: <HandshakeIcon />,
      color: '#38a169',
    },
    {
      title: 'Mükemmellik',
      description: 'Her dava ve danışmanlık hizmetinde mükemmellik hedefliyoruz.',
      icon: <StarIcon />,
      color: '#e53e3e',
    },
  ];

  const teamMembers = [
    {
      name: 'Av. Gülümser Bilgiç',
      position: 'Kurucu',
      experience: '5+ yıl deneyim',
      specialty: '',
    },
    {
      name: 'Av. Duygu Gedikoğlu',
      position: 'Kıdemli Ortak',
      experience: '10+ yıl deneyim',
      specialty: 'Aile Hukuku, İş Hukuku',
    },
  ];

  return (
    <AboutSection id="about">
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ py: 8 }}>
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
              Hakkımızda
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
              10+yılı aşkın deneyimimizle, müvekkillerimizin hukuki sorunlarını çözmek için 
              profesyonel ve güvenilir hizmet sunuyoruz.
            </Typography>
          </Box>

          {/* Main Content */}
          <Grid container spacing={6} sx={{ mb: 8 }}>
            {/* Left Column - About Text */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: theme.palette.primary.main,
                }}
              >
                Deneyimli Hukuk Bürosu
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: theme.palette.text.secondary,
                }}
              >
                2025 yılında kurulan Gülümser Bilgiç Avukatlık ve Hukuk Bürosu, Türkiye'nin önde gelen hukuk bürolarından biri olarak 
                hizmete açıldı. Deneyimli iş ortağımız Gedikoğlu Hukuk ve avukat kadromuzla, her alanda hukuki çözümler sunuyoruz.
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: theme.palette.text.secondary,
                  textAlign: 'justify',
                }}
              >
                Müvekkillerimizin haklarını en iyi şekilde savunmak için sürekli kendimizi geliştiriyor, 
                hukuki alandaki yenilikleri takip ediyoruz. Her dava ve danışmanlık hizmetinde 
                mükemmellik hedefliyoruz.
              </Typography>

              {/* Stats */}
              <Grid container spacing={3} sx={{ mt: 4 }}>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        color: theme.palette.secondary.main,
                        mb: 1,
                      }}
                    >
                     250+
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      Başarılı Dava
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        color: theme.palette.secondary.main,
                        mb: 1,
                      }}
                    >
                      10+
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      Yıl Deneyim
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            {/* Right Column - Team */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: theme.palette.primary.main,
                }}
              >
                Uzman Kadromuz
              </Typography>
              
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  sx={{
                    mb: 2,
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        sx={{
                          width: 56,
                          height: 56,
                          backgroundColor: theme.palette.primary.main,
                          mr: 2,
                        }}
                      >
                        {member.name.split(' ')[1]?.[0] || member.name[0]}
                      </Avatar>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {member.name}
                        </Typography>
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                          {member.position}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body2" sx={{ color: theme.palette.secondary.main, mb: 1 }}>
                      {member.experience}
                    </Typography>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      {member.specialty}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Grid>
          </Grid>

          {/* Values Section */}
          <Box sx={{ mt: 8 }}>
            <Typography
              variant="h3"
              sx={{
                textAlign: 'center',
                fontWeight: 700,
                mb: 4,
                color: theme.palette.primary.main,
              }}
            >
              Değerlerimiz
            </Typography>
            
            <Grid container spacing={4}>
              {values.map((value, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <ValueCard>
                    <CardContent sx={{ textAlign: 'center', p: 4 }}>
                      <Box
                        sx={{
                          width: '80px',
                          height: '80px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 3,
                          backgroundColor: `${value.color}15`,
                          color: value.color,
                          fontSize: '2.5rem',
                        }}
                      >
                        {value.icon}
                      </Box>
                      
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          mb: 2,
                          color: theme.palette.primary.main,
                        }}
                      >
                        {value.title}
                      </Typography>
                      
                      <Typography
                        variant="body1"
                        sx={{
                          color: theme.palette.text.secondary,
                          lineHeight: 1.6,
                        }}
                      >
                        {value.description}
                      </Typography>
                    </CardContent>
                  </ValueCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </AboutSection>
  );
};

export default About; 