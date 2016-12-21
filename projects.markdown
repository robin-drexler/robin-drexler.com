---
layout: page
title:  'Projects'
permalink: /projects/
---



# Projects
Here you can find some of the projects, I'm currently working on or worked on in the past.  
Additionally, there's an [extra page with some of my Chrome extensions](/projects/chrome-extensions/ "Chrome Extensions").
<div style="height: 40px;"><span></span></div>
## cosch - a COnference SCHedule tool
[cosch](https://rubygems.org/gems/cosch "https://rubygems.org/gems/cosch") is an easy to use, offline available, responsive and flexible schedule/timetable website generator for conferences.   
It was already successfully used and tested by some conferences, including <span style="line-height: 1.6;" data-mce-style="line-height: 1.6;">[Javascript Unconference](http://jsunconf.github.io/schedule2015.jsunconf.eu/ "http://jsunconf.github.io/schedule2015.jsunconf.eu/"),</span><span style="line-height: 1.6;" data-mce-style="line-height: 1.6;"> </span>[PHP Unconference](http://bootev.github.io/2014-phpunconf-schedule/ "http://bootev.github.io/2014-phpunconf-schedule/") and [Python Unconference](http://bootev.github.io/2014-pythonunconf-schedule/index.html "http://bootev.github.io/2014-pythonunconf-schedule/index.html")<span style="line-height: 1.6;" data-mce-style="line-height: 1.6;">.</span>  

It's heavily inspired by [jekyll](http://jekyllrb.com/ "http://jekyllrb.com/").  

**Technologies used**:  

*   Ruby
*   App Cache (for making the schedule available offline)
*   Flexbox (to achieve responsive layout)
*   RSpec

You can find the source code on [robin-drexler/cosch](https://github.com/robin-drexler/cosch "https://github.com/robin-drexler/cosch").
## Contriboot
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
## Jimflow Print
JimFlow Print is part of the [JimFlow project](http://jimflow.jimdo.com/), which helps digitizing kanban boards.  
JimFlow Print enables everyone in a company or office to print tickets and notes (currently) on A6 format, using [Google Cloud Print API](https://developers.google.com/cloud-print/) for managing (Epson) printers and print jobs. No need for hours-long printer setups.  

You can find the source code on: [Jimdo/JimFlowPrint](https://github.com/Jimdo/JimFlowPrint "https://github.com/Jimdo/JimFlowPrint")  

Used Technologies:  

*   Symfony 2
*   Google Cloud Print API (for printing Tickets)
*   Ansible (for setting up local development environment)
## Conference Organization
In recent years I got the chance to co-organize some community driven tech events.   

*   [International Free Software Conference in Cuba (2016)](https://www.cubaconf.org/ "https://www.cubaconf.org/")
*   [JS Unconference (2014, 2015)](http://jsunconf.eu "http://jsunconf.eu")
*   [PHP Unconference (2013)](http://www.php-unconference.de/ "http://www.php-unconference.de/")

For more details also check out [BOOT e.V](http://www.bootev.org/ "http://www.bootev.org/")., the association that backs most of those events, where I currently serve as board member and treasurer.