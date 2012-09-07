Title: Gelatin Fining
Author: Charles Howard
Date: 2012-09-07 12:00

OK, I hear you. Capturing packets is hard and best left to kernel hackers, assembly language programmers, and black hat security
researches. If you just want to make things for the web using node.js, why should you care?

Pulling packets off the network can show you what your computers are saying to each other without disrupting the flow of or changing any applications. Packet capture is a fantastic debugging tool that will remove a lot of the mystery from writing and running network programs. The point of `node_pcap` is to provide a good HTTP debugging tool and a framework for doing your own network analysis.

There are plenty of ways to do packet inspection these days, but none of them let you interact with your network traffic the way that node lets you write network programs: by writing a few event handlers in JavaScript. `node_pcap` not only let's you capture and process packets in JavaScript, but since it is built on node.js, data from the packets can be easily routed around to web browsers, databases, or whatever else you can think of.

## Example

Here's an example of capturing packets and sending them back to a web browser using WebSocket:

<http://pcap.ranney.com:81/>

If you still aren't convinced, check out how easy it is to write a simple "network grep" type of program using `node_pcap`:
