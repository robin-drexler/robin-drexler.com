---
layout: post
title:  'Contriboot'
permalink: /2015/02/28/contriboot/
date:   2015-02-28 00:00:00
categories: projects projects-frontpage
---


# Contriboot
Contriboot is an application that allows [barcamp style conferences](http://en.wikipedia.org/wiki/BarCamp "http://en.wikipedia.org/wiki/BarCamp") (e.g. unconferences) to gather talk proposals and interests online before the actual event takes place.  
Visitors are able to vote for talks they're interested in, so the people submitting talks can roughly gauge the interest.  
The application is for example in use for the [JS Unconf 2015](http://contriboot.jsunconf.eu/ "http://contriboot.jsunconf.eu/").  
Contriboot was mainly developed by the awesome [Robert Kowalski](http://robert-kowalski.de/ "http://robert-kowalski.de/") and my humble self. Robert even wrote [an amazing article about the tech stack of contriboot](http://robert-kowalski.de/blog/choosing-the-right-stack-why-we-chose-hapi-couchdb-and-ansible/ "http://robert-kowalski.de/blog/choosing-the-right-stack-why-we-chose-hapi-couchdb-and-ansible/").  

You can find the source code on: [jsunconf/contriboot](https://github.com/jsunconf/contriboot "https://github.com/jsunconf/contriboot").  

Technologies used:  

*   NodeJS
*   HapiJS (MVC framework)
*   Ansible (for provisioning and deployment. If you're interested why and how that works, I highly recommend [Robert's article](http://robert-kowalski.de/blog/choosing-the-right-stack-why-we-chose-hapi-couchdb-and-ansible/ "http://robert-kowalski.de/blog/choosing-the-right-stack-why-we-chose-hapi-couchdb-and-ansible/"))
*   Couch DB
*   Selenium/webdriver/lab (for automated integrational browser testing)