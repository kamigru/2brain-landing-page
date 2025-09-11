import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaThreads, FaTwitter, FaXTwitter, FaYoutube } from "react-icons/fa6";

export const getPlatformIconByName = (platformName: string): JSX.Element | null => {
    switch (platformName) {
        case 'facebook': {
            return <FaFacebook size={24} className='min-w-fit' style={{ color: 'var(--text-strong)' }} />;
        }
        case 'github': {
            return <FaGithub size={24} className='min-w-fit' style={{ color: 'var(--text-strong)' }} />;
        }
        case 'instagram': {
            return <FaInstagram size={24} className='min-w-fit' style={{ color: 'var(--text-strong)' }} />;
        }
        case 'linkedin': {
            return <FaLinkedin size={24} className='min-w-fit' style={{ color: 'var(--text-strong)' }} />;
        }
        case 'threads': {
            return <FaThreads size={24} className='min-w-fit' style={{ color: 'var(--text-strong)' }} />;
        }
        case 'twitter': {
            return <FaTwitter size={24} className='min-w-fit' style={{ color: 'var(--text-strong)' }} />;
        } 
        case 'youtube': {
            return <FaYoutube size={24} className='min-w-fit' style={{ color: 'var(--text-strong)' }} />;
        }
        case 'x': {
            return <FaXTwitter size={24} className='min-w-fit' style={{ color: 'var(--text-strong)' }} />;
        }
        default:
            console.log('Platform name not supported, no icon is returned:', platformName);
            return null;
    }
}