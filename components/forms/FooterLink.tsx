// Small reusable component for link text shown at the bottom of auth forms.
// Keeps sign-in/sign-up pages visually consistent.
const FooterLink = ({text, linkText, href} : FooterLinkProps) => {
    return (
        <div className="text-center pt-4">
            <p className="text-sm text-gray-500">
                {text} {' '}
                <a href={href} className="footer-link">
                    {linkText}
                </a>
            </p>
        </div>
    );
}

export default FooterLink;