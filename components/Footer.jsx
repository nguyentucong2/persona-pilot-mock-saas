import React from 'react';

export default function Footer() {
  return (
    <footer className='site-footer'>
        <div>
          <h3>PersonaPilot</h3>
          <p>Made with ❤️ by Shubhi.</p>
          <p style={{ fontSize: '0.875rem', paddingTop: '1rem'}}>© 2025 PersonaPilot Inc. All rights reserved.</p>
        </div>

        <div className='footer-links'>
            <div>
                <h4>Company</h4>
                <ul>
                    <li><a href="/about">About</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/careers">Careers</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>

            <div>
                <h4>Resources</h4>
                <ul>
                    <li><a href="/help">Help Center</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms of Service</a></li>
                    <li><a href="/accessibility">Accessibility</a></li>
                </ul>
            </div>

            <div>
                <h4>Connect</h4>
                <ul>
                    <li><a href="https://twitter.com/personapilot" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://linkedin.com/company/personapilot" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="mailto:hello@personapilot.io">Email Us</a></li>
                </ul>
            </div>
        </div>
    </footer>
  );
}
