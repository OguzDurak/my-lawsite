import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  useTheme,
  Alert,
  Snackbar,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';

const ContactSection = styled(Box)(({ theme }) => ({
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

const ContactCard = styled(Card)(({ theme }) => ({
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

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const contactInfo = [
    {
      icon: <PhoneIcon />,
      title: 'Telefon',
      details: ['+90 507 733 44 94', '+90 216 266 79 25'],
      color: '#3182ce',
    },
    {
      icon: <EmailIcon />,
      title: 'E-posta',
      details: ['info@gbhukukburosu.com', 'danismanlik@hukukburosu.com'],
      color: '#d69e2e',
    },
    {
      icon: <LocationOnIcon />,
      title: 'Adres',
      details: ['Ümmühan, Tok Caddesi', 'No: 7, Kat: 2, Ayvacık/Çanakkale'],
      color: '#38a169',
    },
    {
        icon: <LocationOnIcon />,
        title: 'İstanbul Ofisi',
        details: ['Cevizli Mahallesi, Tugay Yolu Caddesi', 'No: 10A, Kat: 10, Maltepe/İstanbul'],
        color: '#38a169',
      },
    {
      icon: <AccessTimeIcon />,
      title: 'Çalışma Saatleri',
      details: ['Pazartesi - Cuma: 09:00 - 18:00', 'Cumartesi: 09:00 - 13:00'],
      color: '#e53e3e',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSnackbar({
        open: true,
        message: 'Lütfen tüm zorunlu alanları doldurun.',
        severity: 'error',
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSnackbar({
        open: true,
        message: 'Lütfen geçerli bir e-posta adresi girin.',
        severity: 'error',
      });
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);
    
    setSnackbar({
      open: true,
      message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.',
      severity: 'success',
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <ContactSection id="contact">
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
              İletişim
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
              Hukuki sorunlarınız için bizimle iletişime geçin. 
              Uzman ekibimiz size en kısa sürede dönüş yapacaktır.
            </Typography>
          </Box>

          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item xs={12} lg={6}>
              <ContactCard>
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 600,
                      mb: 3,
                      color: theme.palette.primary.main,
                    }}
                  >
                    Ücretsiz Danışmanlık
                  </Typography>
                  
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Ad Soyad *"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="E-posta *"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Telefon"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Konu"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          sx={{ mb: 2 }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Mesajınız *"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          multiline
                          rows={4}
                          required
                          sx={{ mb: 3 }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          fullWidth
                          endIcon={<SendIcon />}
                          sx={{
                            backgroundColor: theme.palette.secondary.main,
                            color: 'white',
                            py: 2,
                            fontSize: '1.1rem',
                            '&:hover': {
                              backgroundColor: theme.palette.secondary.dark,
                            },
                          }}
                        >
                          Mesaj Gönder
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </ContactCard>
            </Grid>

            {/* Contact Information */}
            <Grid item xs={12} lg={6}>
              <Grid container spacing={3}>
                {contactInfo.map((info, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <ContactCard>
                      <CardContent sx={{ p: 3, textAlign: 'center' }}>
                        <Box
                          sx={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 2,
                            backgroundColor: `${info.color}15`,
                            color: info.color,
                            fontSize: '1.5rem',
                          }}
                        >
                          {info.icon}
                        </Box>
                        
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            mb: 2,
                            color: theme.palette.primary.main,
                          }}
                        >
                          {info.title}
                        </Typography>
                        
                        {info.details.map((detail, detailIndex) => (
                          <Typography
                            key={detailIndex}
                            variant="body2"
                            sx={{
                              color: theme.palette.text.secondary,
                              mb: detailIndex < info.details.length - 1 ? 0.5 : 0,
                            }}
                          >
                            {detail}
                          </Typography>
                        ))}
                      </CardContent>
                    </ContactCard>
                  </Grid>
                ))}
              </Grid>

              {/* Additional Info */}
              <Box
                sx={{
                  mt: 4,
                  p: 3,
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: '16px',
                  color: 'white',
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Acil Durumlar
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                  Acil hukuki durumlar için 7/24 hizmet veriyoruz.
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  📞 Acil Hattı: +90 212 555 0125
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Snackbar for form feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </ContactSection>
  );
};

export default Contact; 