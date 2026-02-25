import { useState } from 'react';
import { MapPin, Facebook, Instagram, Phone, Ticket, ArrowLeft, Send } from 'lucide-react';

const TikTokIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function App() {
  const [view, setView] = useState('main');

  const mainLinks = [
    {
      title: 'Google Maps Location',
      url: 'https://maps.app.goo.gl/DRH7huotm4J7PdAx7',
      icon: <MapPin size={20} />,
    },
    {
      title: 'Danh Sách Tour (Sắp mở)',
      url: '#',
      icon: <Ticket size={20} />,
    },
    {
      title: 'Facebook Page',
      url: 'https://www.facebook.com/sontravillahoian215/',
      icon: <Facebook size={20} />,
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/sontra.villa.hoian/',
      icon: <Instagram size={20} />,
    },
    {
      title: 'TikTok',
      url: 'https://www.tiktok.com/@sn.tr.villa.hi.an',
      icon: <TikTokIcon />,
    }
  ];

  const supportLinks = [
    {
      title: 'Zalo (+84862852258)',
      url: 'https://zalo.me/84862852258', // Zalo default format
      icon: <Send size={20} />,
    },
    {
      title: 'WhatsApp (Sắp cập nhật)',
      url: '#',
      icon: <Phone size={20} />,
    },
    {
      title: 'KakaoTalk (Sắp cập nhật)',
      url: '#',
      icon: <Send size={20} />,
    }
  ];

  const handleLinkClick = (url, e) => {
    if (url === '#') {
      e.preventDefault();
      alert('Đường dẫn này sẽ được cập nhật sau.');
      return;
    }
  };

  return (
    <div className="app-container">
      {/* Top right support text link - only visible in main view */}
      {view === 'main' && (
        <div 
          className="support-link"
          onClick={() => setView('support')}
        >
          <Phone size={14} /> +84 862 852 258
        </div>
      )}

      {view === 'main' ? (
        <div className="fade-in">
          <div className="profile">
            {/* Try to use the provided user image as Avatar, fallback to initials if fails, but here we just render standard img tag */}
            <img src="/806356723.jpg" alt="Son Tra Villa Hoi An" className="avatar" onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Son+Tra+Villa&background=047857&color=fff&size=200' }} />
            <h1 className="title">Son Tra Villa Hoi An</h1>
            <p className="subtitle">Quiet Pool Villa Near Old Town</p>
          </div>

          <div className="links">
            {mainLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url} 
                className="link-card" 
                target={link.url !== '#' ? "_blank" : "_self"} 
                rel="noopener noreferrer"
                onClick={(e) => handleLinkClick(link.url, e)}
              >
                <div className="link-icon">
                  {link.icon}
                </div>
                <div className="link-text">
                  {link.title}
                </div>
              </a>
            ))}
          </div>
        </div>
      ) : (
        <div className="fade-in">
          <button className="back-btn" onClick={() => setView('main')}>
            <ArrowLeft size={18} /> Quay Lại
          </button>
          
          <div className="profile">
            <h2 className="title">Hỗ Trợ Nhanh</h2>
            <p className="subtitle">Chọn một phương thức liên lạc dưới đây để chúng tôi hỗ trợ bạn</p>
          </div>

          <div className="links">
            <a 
              href="tel://+84862852258" 
              className="link-card"
            >
              <div className="link-icon">
                <Phone size={20} />
              </div>
              <div className="link-text">
                Gọi Điện Trực Tiếp (+84 862 852 258)
              </div>
            </a>
            
            {supportLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url} 
                className="link-card" 
                target={link.url !== '#' ? "_blank" : "_self"} 
                rel="noopener noreferrer"
                onClick={(e) => handleLinkClick(link.url, e)}
              >
                <div className="link-icon">
                  {link.icon}
                </div>
                <div className="link-text">
                  {link.title}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
