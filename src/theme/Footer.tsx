import OriginalFooter from '@theme-original/Footer';
import React from 'react';
import { SubscribeForm } from '../components/SubscribeForm';

function Footer(props: {}) {
  return (
    <div className="footer-wrapper footer">
      <div className="container margin-top--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
              }}>
              <div style={{ flexGrow: 1 }}>
                <h3>About Spencer Lepine</h3>I'm a Software Engineer based in Seattle, currently serving part-time in the Army Reserve. With a primary focus on full-stack
                development, I'm also passionate about DevOps, open-source, and everything cloud.
              </div>
              <img
                src="/assets/blog-headshot.png"
                style={{
                  borderRadius: '50%',
                  height: 130,
                  marginLeft: 10,
                  width: 130,
                }}
              />
            </div>
            <div
              className="margin-top--lg"
              style={{
                alignItems: 'center',
                display: 'flex',
              }}>
              <div style={{ flexGrow: 1 }}>
                <h3>Stay up to date</h3>
                <p>Subscribe to the newsletter to stay up to date with my latest content and work!</p>
                <SubscribeForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <OriginalFooter {...props} />
    </div>
  );
}

export default Footer;
