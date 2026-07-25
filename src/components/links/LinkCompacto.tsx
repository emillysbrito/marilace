import type { IconType } from 'react-icons';
import styles from './LinkCompacto.module.css';

interface LinkCompactoProps {
    href: string;
    icon: IconType;
    size?: number;
}

export function LinkCompacto({ href, icon: Icon, size = 18 }: LinkCompactoProps) {
    return (
        <a
            href={href}
            className={styles.link}
            target="_blank" //abre o site em outra aba
        >
            <Icon size={size} />
        </a>
    );
}