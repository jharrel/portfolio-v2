import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>&copy; JHarrel Design</li>
        <br />
          <a href="github.com/jharrel" target="_blank">Github</a>
        <li>
          <a href="linkedin.com/in/jasonharrel" target="_blank">Linkedin</a>
        </li>
        <li>
          <a href="mailto: jharreldesign@gmail.com" target="_blank">Email</a>
        </li>
      </ul>
    </footer>
  );
}
