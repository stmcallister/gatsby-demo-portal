import React, { Component } from "react";

import "./Portal.scss";

class Portal extends Component {
  render() {
    return (
      <div class="main-container">
        <div class="PortalMain">
          <div class="PortalItem">
            <div class="PortalItemContent">
              <h3>Community</h3>
              <p class="PortalItemDesc">
                To ask the larger community, post on the Community Forum
              </p>
            </div>
            <div class="PortalItemBottom">
              <a href="https://community.pagerduty.com/" class="PortalItemButton" target="_blank">PagerDuty Community</a>
            </div>
          </div>
          <div class="PortalItem">
            <div class="PortalItemContent">
              <h3>API Docs</h3>
              <p class="PortalItemDesc">
                Getting Started guide, API Reference, and code snippets
              </p>
            </div>
            <div class="PortalItemBottom">
              <a href="https://v2.developer.pagerduty.com/docs" class="PortalItemButton" target="_blank">Documentation</a>
            </div>
          </div>
          <div class="PortalItem">
            <div class="PortalItemContent">
              <h3>Samples</h3>
              <p class="PortalItemDesc">
                Kickstart your code with sample apps and complex snippets
              </p>
            </div>
            <div class="PortalItemBottom">
              <a href="https://github.com/PagerDuty" class="PortalItemButton" target="_blank">Code Samples</a>
            </div>
          </div>
          <div class="PortalItem">
            <div class="PortalItemContent">
              <h3>Register</h3>
              <p class="PortalItemDesc">
              Get your own developer sandbox account to build apps with PagerDuty data
              </p>
            </div>
            <div class="PortalItemBottom">
              <a href="/register/" class="PortalItemButton" target="_blank">Register</a>
            </div>
          </div>
          <div class="PortalItem">
            <div class="PortalItemContent">
              <h3>Blog</h3>
              <p class="PortalItemDesc">
              Read about all things PagerDuty Development
              </p>
            </div>
            <div class="PortalItemBottom">
              <a href="/blog/" class="PortalItemButton" target="_blank">Blog</a>
            </div>
          </div>
        </div>
        <section class="SDKSection">
          <h2>PagerDuty API Libraries</h2>
          <p class="SDKText">PagerDuty has API libraries providing a higher level interface for several languages. There is also a sample app provided for each library.</p>
          <div class="SDKContainer">
            <div class="SDKItem">
              <div class="SDKItemTitle">
                Go
              </div>
              <div>
                <a href="https://github.com/PagerDuty/go-pagerduty" target="_blank" class="SDKLink">
                  Library
                </a>
              </div>
            </div>
            <div class="SDKItem">
              <div class="SDKItemTitle">
                Python
              </div>
              <div>
                <a href="https://github.com/PagerDuty/pagerduty-api-python-client" target="_blank" class="SDKLink">
                  Library
                </a>
              </div>
            </div>
            <div class="SDKItem">
              <div class="SDKItemTitle">
                Node
              </div>
              <div>
                <a href="https://github.com/kmart2234/node-pagerduty" target="_blank" class="SDKLink">
                  Library
                </a>
              </div>
            </div>
            <div class="SDKItem">
              <div class="SDKItemTitle">
                Ruby
              </div>
              <div>
                <a href="https://github.com/technicalpickles/pager_duty-connection" target="_blank" class="SDKLink">
                  Library
                </a>
              </div>
            </div>
          <div class="SDKItem">
            <div class="SDKItemTitle">
              Java
            </div>
            <div>
              <a href="https://github.com/comodal/pagerduty-client" target="_blank" class="SDKLink">
                Library
              </a>
            </div>
          </div>
          </div>
          <div class="SDKContainerBottom">
            <a href="https://github.com/PagerDuty" class="PortalItemButton" target="_blank">PagerDuty on GitHub</a>
          </div>
        </section>
      </div>
    );
  }
}

export default Portal;