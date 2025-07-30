import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  useTheme,
  Divider,
  Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import GavelIcon from '@mui/icons-material/Gavel';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: 'white',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(15, 31, 46, 0.95) 0%, rgba(26, 54, 93, 0.95) 100%)',
    zIndex: 0,
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.8)',
  textDecoration: 'none',
  fontSize: '0.9rem',
  fontWeight: 400,
  transition: 'all 0.3s ease',
  display: 'block',
  padding: '0.5rem 0',
  '&:hover': {
    color: theme.palette.secondary.main,
    transform: 'translateX(5px)',
  },
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: 'white',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  },
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1rem',
  padding: '0.5rem 0',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateX(5px)',
  },
  '& .MuiSvgIcon-root': {
    marginRight: '0.75rem',
    fontSize: '1.2rem',
    color: theme.palette.secondary.main,
  },
}));

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    hizmetler: [
      { name: 'Ceza Hukuku', href: '#services' },
      { name: 'Ticaret Hukuku', href: '#services' },
      { name: 'Aile Hukuku', href: '#services' },
      { name: 'İş Hukuku', href: '#services' },
      { name: 'İdari Hukuk', href: '#services' },
      { name: 'Gayrimenkul Hukuku', href: '#services' },
    ],
    kurumsal: [
      { name: 'Hakkımızda', href: '#about' },
      { name: 'Ekibimiz', href: '#about' },
      { name: 'Referanslar', href: '#testimonials' },
      { name: 'Blog', href: '#' },
      { name: 'Kariyer', href: '#' },
      { name: 'Basın', href: '#' },
    ],
    iletisim: [
      { name: 'İletişim', href: '#contact' },
      { name: 'Randevu Al', href: '#contact' },
      { name: 'Ücretsiz Danışmanlık', href: '#contact' },
      { name: 'Acil Hattı', href: 'tel:+902125550125' },
      { name: 'Online Görüşme', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: <FacebookIcon />, href: '#', label: 'Facebook', color: '#1877F2' },
    { icon: <TwitterIcon />, href: '#', label: 'Twitter', color: '#1DA1F2' },
    { icon: <LinkedInIcon />, href: '#', label: 'LinkedIn', color: '#0077B5' },
    { icon: <InstagramIcon />, href: '#', label: 'Instagram', color: '#E4405F' },
  ];

  const handleScrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <FooterSection>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ py: 8 }}>
          <Grid container spacing={6}>
            {/* Company Info */}
            <Grid item xs={12} lg={4}>
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <GavelIcon sx={{ fontSize: '2.5rem', mr: 2, color: theme.palette.secondary.main }} />
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
                      Gülümser Bilgiç Avukatlık ve Hukuk Bürosu
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.7, fontWeight: 500 }}>
                      Güvenilir Hukuki Çözümler
                    </Typography>
                  </Box>
                </Box>
                
                <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, lineHeight: 1.8, fontSize: '1rem', textAlign: 'center' }}>
                  10+ yılı aşkın deneyimimizle, müvekkillerimizin hukuki sorunlarını çözmek için 
                  profesyonel ve güvenilir hizmet sunuyoruz. Adalet ve güven bizim önceliğimizdir.
                </Typography>
              </Box>

              {/* Contact Info */}
              <Box sx={{ mb: 4 ,textAlign: 'center' }}>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: theme.palette.secondary.main }}>
                  İletişim Bilgileri
                </Typography>
                
                <Stack spacing={2}>
                  <ContactItem>
                    <PhoneIcon />
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Telefon
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        +90 507 733 44 94
                      </Typography>
                    </Box>
                  </ContactItem>
                  
                  <ContactItem>
                    <EmailIcon />
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        E-posta
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        info@gbhukukburosu.com
                      </Typography>
                    </Box>
                  </ContactItem>
                  
                  <ContactItem>
                    <LocationOnIcon />
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Adres
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        Ümmühan, Tok Caddesi No: 7, Kat: 2, Ayvacık/Çanakkale
                      </Typography>
                    </Box>
                  </ContactItem>
                </Stack>
              </Box>

              {/* Social Links */}
              <Box>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: theme.palette.secondary.main }}>
                  Bizi Takip Edin
                </Typography>
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  {socialLinks.map((social, index) => (
                    <SocialButton
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      size="large"
                    >
                      {social.icon}
                    </SocialButton>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Footer Links */}
            <Grid item xs={12} lg={8}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={4}>
                  <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: theme.palette.secondary.main }}>
                    Hizmetlerimiz
                  </Typography>
                  <Box>
                    {footerLinks.hizmetler.map((link, index) => (
                      <FooterLink
                        key={index}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleScrollToSection(link.href);
                        }}
                      >
                        {link.name}
                      </FooterLink>
                    ))}
                  </Box>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: theme.palette.secondary.main }}>
                    Kurumsal
                  </Typography>
                  <Box>
                    {footerLinks.kurumsal.map((link, index) => (
                      <FooterLink
                        key={index}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleScrollToSection(link.href);
                        }}
                      >
                        {link.name}
                      </FooterLink>
                    ))}
                  </Box>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: theme.palette.secondary.main }}>
                    İletişim
                  </Typography>
                  <Box>
                    {footerLinks.iletisim.map((link, index) => (
                      <FooterLink
                        key={index}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleScrollToSection(link.href);
                        }}
                      >
                        {link.name}
                      </FooterLink>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Divider */}
          <Divider sx={{ my: 6, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

          {/* Bottom Section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', md: 'center' },
              gap: 3,
            }}
          >
            <Box>
              <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
                © {currentYear} Hukuk Bürosu. Tüm hakları saklıdır.
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.6 }}>
                Baro Sicil No: 12345 | Vergi No: 1234567890
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
              <FooterLink href="#" sx={{ fontSize: '0.875rem' }}>
                Gizlilik Politikası
              </FooterLink>
              <FooterLink href="#" sx={{ fontSize: '0.875rem' }}>
                Kullanım Şartları
              </FooterLink>
              <FooterLink href="#" sx={{ fontSize: '0.875rem' }}>
                KVKK
              </FooterLink>
              <FooterLink href="#" sx={{ fontSize: '0.875rem' }}>
                Çerez Politikası
              </FooterLink>
            </Box>
          </Box>
        </Box>
      </Container>
    </FooterSection>
  );
};

export default Footer; 