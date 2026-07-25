import type { IconType } from 'react-icons';
import styles from './LinkRede.module.css';

interface LinkRedeProps {
    href: string;
    texto: string;
    icon: IconType;
    cor: string;
    size?: number;
}

export function LinkRede({ href, texto, icon: Icon, cor, size = 24 }: LinkRedeProps) {
    return (
        <a
            href={href}
            target="_blank"
            className={styles.link}
            style={{ backgroundColor: cor }}
        >
            <Icon size={size} />
            <span>{texto}</span>
        </a>
    );
}