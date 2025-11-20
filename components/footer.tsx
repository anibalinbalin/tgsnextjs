import Link from 'next/link'
import DevBadge from './dev-badge'

export default function FooterSection() {
    return (
        <footer className="relative py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="text-center font-medium mb-6" style={{ fontSize: '35px', lineHeight: '47px' }}>
                    THE GARZÓN SCHOOL
                </h2>

                <div className="my-4 text-center space-y-2">
                    <p className="text-sm text-muted-foreground md:text-base">
                        Ruta 104 KM 13.5, 20000 Manantiales, Maldonado, Uruguay
                    </p>
                    <p className="text-sm text-muted-foreground md:text-base">
                        <Link
                            href="mailto:info@thegarzonschool.edu.uy"
                            className="hover:text-primary duration-150">
                            info@thegarzonschool.edu.uy
                        </Link>
                    </p>
                    <p className="text-sm text-muted-foreground md:text-base">
                        <Link
                            href="tel:+59898506085"
                            className="hover:text-primary duration-150">
                            +598 98 506 085
                        </Link>
                    </p>
                </div>

                <div className="my-4 text-center space-y-1">
                    <p className="text-sm text-muted-foreground md:text-base">
                        ANEP-CEIP - Colegio Autorizado Nº 1 (Maldonado)
                    </p>
                    <p className="text-sm text-muted-foreground md:text-base">
                        ANEP-CODICEN - Exp. Nº 2023-25-2-001958
                    </p>
                </div>
                <div className="my-4 flex flex-wrap justify-center gap-6 text-sm">
                    <Link
                        href="https://www.instagram.com/thegarzonschool/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-muted-foreground hover:text-primary block">
                        <svg
                            className="size-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
                        </svg>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/company/thegarz%C3%B3nschool/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-muted-foreground hover:text-primary block">
                        <svg
                            className="size-6"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                        </svg>
                    </Link>
                </div>
                <span className="text-sm text-muted-foreground md:text-base block text-center">© {new Date().getFullYear()} The Garzón School</span>
            </div>
            <DevBadge name="footer" />
        </footer>
    )
}
