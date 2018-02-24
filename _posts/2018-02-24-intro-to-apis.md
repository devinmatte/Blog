---
layout: post
title:  Intro to APIs
subtitle: What are APIs, and how to make your own
description: API's are wonderful tools, and learning why you use them, and how to create them is incredibly valuable
date:   2018-02-24
categories: tutorial
featured-image: /images/posts/intro-to-apis/api-icon.png
thumbnail-image: /images/posts/intro-to-apis/api-icon.png
comments: true
author: Devin Matte
author-image: /images/devinmatte.jpg
author-bio: Second Year Software Engineering Student at Rochester Institute of Technology
---

API's are wonderful tools, and learning why you use them, and how to create them is incredibly valuable. There's thousands of APIs that are exposed to the public for use. From [GitHub](https://developer.github.com/v3/), to [Stripe](https://stripe.com/docs/api) or [Google Calendar](https://developers.google.com/google-apps/calendar/) APIs allow you to access and utilize other systems. This tutorial is going to teach you how to use, and make your own API so that you can take advantage of the power that REST provides.

## What are APIs?

![](/images/posts/intro-to-apis/api-icon.png)

API stands for Application Programming Interface. But that doesn't exactly help anyone understand what it is. An API is a communication protocol between software that allows for the transfer of data between systems.

#### The best example I can give for a use case for an API is for a simple request to a database:

Let's say you have a database on a server. Let's say you have a table of users. It has username, email, phone numbers and password hashes stored in it. Now let's say another application wants to access that information. But maybe you don't want to provide them with the raw password hash. 

|username|email|phone|passhash|
|--------|-----|-----|--------|
| matted | matted@csh.rit.edu | 5555555555 | DehnAr%3a!gbHhhOkQQ |

Let's say you also only want them to get that data if they have the username and password for the user. In this scenario you could create an API that allows for a request to be made for that information, but only returns what you want, given what you want. If a user makes a request for information without a password, you can just reject or ignore the request. 

```json
{
    "error": "Invalid Credentials"
}
```

But if provided correctly, you can return the data in whatever form you wish, and omit whatever fields you wish to omit.

```json
{
    "username": "matted",
    "email": "matted@csh.rit.edu",
    "phone": 5555555555
}
```


## What is RESTful?

From [codecademy](https://www.codecademy.com/articles/what-is-rest): In the REST architectural style, the implementation of the client and the implementation of the server can be done independently without each knowing about the other. This means that the code on the client side can be changed at any time without affecting the operation of the server, and the code on the server side can be changed without affecting the operation of the client.

REST is often confused for HTTP. They are not the same, but they do work well together. Most web-api's, specifically the one's I'll be teaching you today, are in fact HTTP.

When working with a RESTful HTTP API, there are 4 basic methods that you should learn.

- **GET** — retrieve a specific resource (by id) or a collection of resources
- **POST** — update a specific resource (by id)
- **PUT** — create a new resource
- **DELETE** — remove a specific resource by id

## Paths

First thing we should go over, is how to structure an API. 
RESTful APIs are accessed generally through simple web routes.
Think of something like `google.com/` and `google.com/search`.
You're already likely familiar with the fact that `google.com/` is the route to get the main page.

### Root
`/` is an example of the "root" path of the API. 
It's what's loaded when you go to either `google.com` or `google.com/`.

### Routes
`\search` is the route that exists in the path `google.com/search`.
When you write routes, there is no limit to the path, `/this/is/a/long/path/which/is/valid`.
You should however, try and keep your routes short and simple.
Routes should be easily understood, and generally memorable so that people are able to type it in, or understand what information will be provided simply from the URL.

## Parameters

Parameters are a huge part of APIs. In order for a lot of them to be useful, there needs to be an ability to pass data. You can do this by using parameters.

You may have seen parameters in use, and never even realized it. Think back to the `google.com/search` example. Actually go to [Google](https://google.com) and make a search. 
If you google 'api' you'll get a route like this: 

`https://www.google.com/search?ei=87CEWsH-L8qV_Qau8ILABw&q=api&oq=api&gs_l=psy-ab.3..35i39k1l2j0i131k1j0j0i20i264k1j0i131k1j0i20i264k1j0i131k1j0l2.3075.3336.0.4076.3.3.0.0.0.0.81.215.3.3.0....0...1c.1.64.psy-ab..1.3.215...0i131i20i264k1.0._czjqWn7yUE`

So where are the parameters?
Well everything after `?` is going to define parameters, and ever subsequent `&` will determine another one.

In this example we have the parameters:

- **ei:** 87CEWsH-L8qV_Qau8ILABw
- **q:** api
- **gs_l:** psy-ab.3..35i39k1l2j0i131k1j0j0i20i264k1j0i131k1j0i20i264k1j0i131k1j0l2.3075.3336.0.4076.3.3.0.0.0.0.81.215.3.3.0....0...1c.1.64.psy-ab..1.3.215...0i131i20i264k1.0._czjqWn7yUE

So this is only the case for **GET** requests. For **POST**, **PUT** and **DELETE** parameters are passed in as the payload of the request, outside of the URL route.
The best way to understand it, is that the URL bar of a browser makes **GET** requests, and other forms of requests must be made through a different medium.

## Status Codes

Understanding Status codes is imparative to being able to understand what to do with the data returned by a restful API. What a status code does, is tell you whether or not a request was sucessful or not, and describes the result before you even read the data returned.

Status codes are described in a series of Specs, as there are many that are predefined, but the basics are this:

- **1xx**: Informational responses.
- **2xx**: Success.
- **3xx**: Redirection.
- **4xx**: Client errors.
- **5xx**: Server errors.

If you want to know the more common status codes, you can read one of the specs [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

# Make your Own!

To follow along, clone the [example repo](https://github.com/devinmatte/Your-First-API) and checkout the language/framework of your choice.

```
git clone https://github.com/devinmatte/Your-First-API.git
git checkout [branch]
```

Options are: 

- Python with Flask: `python_flask`
- Java with Spring: `java_spring`
- PHP with Slim: `php_slim`
- Node with Express `node_express`


### Tools

You may at many points want to test your API. A good tool for that would be [Postman](https://www.getpostman.com/). Allows for you to make **GET**, **POST**, **PUT**, and **DELETE** requests easily and read the response.

![](/images/posts/intro-to-apis/postman.svg)


## Getting started

Let's start with simply making a root route that returns "Hello World!" to the body of the response.

<ul id="gettingStarted" class="nav nav-tabs">
    <li class="active"><a href="#python-1" data-toggle="tab"><b>Python</b>/Flask</a></li>
    <li><a href="#java-1" data-toggle="tab"><b>Java</b>/Spring</a></li>
    <li><a href="#php-1" data-toggle="tab"><b>PHP</b>/Slim</a></li>
    <li><a href="#node-1" data-toggle="tab"><b>Node</b>/Express</a></li>
</ul>
<div class="tab-content">
<div role="tabpanel" class="tab-pane active" id="python-1">
<ul>
<li>First run <code>pip install -r requirements.txt</code></li>
<ul>
<li>Make sure you're using Python3, you may need to use <code>pip3</code> instead of <code>pip</code> on some systems.</li>
</ul>
<li>Edit <code>__init__.py</code> and add the following route, then run <code>app.py</code> to test.</li>
</ul>

<pre><code class="python">@app.route("/", methods=["GET"])
def root():
    return "Hello World!"
</code></pre>
</div>

<div role="tabpanel" class="tab-pane" id="java-1">
<ul>
<li>I recommend using an IDE for all Java Development</li>
<ul>
<li>I also recommend using <a href="https://www.jetbrains.com/idea/">Intellij</a></li>
</ul>
<li>Add <code>build.gradle</code> and <code>pom.xml</code> to the <a href="https://gradle.org/">gradle</a>/<a href="https://maven.apache.org/">maven</a> portions of your IDE</li>
<li>Make sure to mark <code>src</code> as the sources directory</li>
<li>Run <code>Application.java</code> to run/test your application
</ul>
<pre><code class="java">@RequestMapping("/")
public String root() {
    return "Hello World!";
}
</code></pre>
</div>

<div role="tabpanel" class="tab-pane" id="php-1">
<ul>
<li>First run <code>composer install</code></li>
<ul>
<li>If you don't have composer, <a href="https://getcomposer.org/">install it</a></li>
</ul>
<li>Edit <code>routes.php</code> and add the following route, then run <code>php -S localhost:3000 -t index.php</code> to test.</li>
</ul>

<pre><code class="php">$app->get('/', function (Request $request, Response $response) {
    return $response->write("Hello World!");
});
</code></pre>
</div>

<div role="tabpanel" class="tab-pane" id="node-1">
<ul>
<li>First run <code>npm install</code></li>
<ul>
<li>If you don't have node, <a href="https://nodejs.org/">install it</a></li>
</ul>
<li>Edit <code>app.js</code> and add the following route, then run <code>node app.js</code> to test.</li>
</ul>

<pre><code class="js">app.get('/', (req, res) => res.send('Hello World!'));
</code></pre>
</div>

</div>

## Multiple Request Types

Not every request in an API is **GET** in most cases. Often an API allows for you to make requests to change the underlying data in the system. In order to do this, you're going to want to take advantage of **POST**, **PUT** and **DELETE**. Doing so in each framework is fairly easy to define.

<ul id="requestTypes" class="nav nav-tabs">
    <li class="active"><a href="#python-2" data-toggle="tab"><b>Python</b>/Flask</a></li>
    <li><a href="#java-2" data-toggle="tab"><b>Java</b>/Spring</a></li>
    <li><a href="#php-2" data-toggle="tab"><b>PHP</b>/Slim</a></li>
    <li><a href="#node-2" data-toggle="tab"><b>Node</b>/Express</a></li>
</ul>
<div class="tab-content">

<div role="tabpanel" class="tab-pane active" id="python-2">
<pre><code class="python"># GET Request
@app.route("/", methods=["GET"])
def root_get():
    return "Hello World!"
    
# POST Request
@app.route("/", methods=["POST"])
def root_post():
    return "Got a POST request at /"
    
# PUT Request
@app.route("/", methods=["PUT"])
def root_put():
    return "Got a PUT request at /"
    
# DELETE Request
@app.route("/", methods=["DELETE"])
def root_delete():
    return "Got a DELETE request at /"
</code></pre>
</div>

<div role="tabpanel" class="tab-pane" id="java-2">
<pre><code class="java">// GET Request
@RequestMapping(value = "/", method = RequestMethod.GET)
public String rootGET() {
    return "Hello World!";
}

// POST Request
@RequestMapping(value = "/", method = RequestMethod.POST)
public String rootPOST() {
    return "Got a POST request at /";
}

// PUT Request
@RequestMapping(value = "/", method = RequestMethod.PUT)
public String rootPUT() {
    return "Got a PUT request at /";
}

// DELETE Request
@RequestMapping(value = "/", method = RequestMethod.DELETE)
public String rootDELETE() {
    return "Got a DELETE request at /";
}
</code></pre>
</div>

<div role="tabpanel" class="tab-pane" id="php-2">
<pre><code class="php">// GET Request
$app->get('/', function (Request $request, Response $response) {
    return $response->write("Hello World!");
});

// POST Request
$app->post('/', function (Request $request, Response $response) {
    return $response->write("Got a POST request at /");
});

// PUT Request
$app->put('/', function (Request $request, Response $response) {
    return $response->write("Got a PUT request at /");
});

// DELETE Request
$app->delete('/', function (Request $request, Response $response) {
    return $response->write("Got a DELETE request at /");
});
</code></pre>
</div>

<div role="tabpanel" class="tab-pane" id="node-2">
<pre><code class="js">// GET Request
app.get('/', function (req, res) {
    res.send('Hello World!');
});

// POST Request
app.post('/', function (req, res) {
    res.send('Got a POST request at /');
});

// PUT Request
app.put('/', function (req, res) {
    res.send('Got a PUT request at /');
});

// DELETE Request
app.delete('/', function (req, res) {
    res.send('Got a DELETE request at /');
});
</code></pre>
</div>

</div>

## Using Status Codes

HTTP requests are made up of two parts, the payload, and the status code. The status code tells whether a request was successful, or failed. It also allows for you handle the results of requests based on the code that it provides. Status codes are generally pretty consistent, so if you're confused what code to return, just reference the [spec](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

<ul id="requestTypes" class="nav nav-tabs">
    <li class="active"><a href="#python-3" data-toggle="tab"><b>Python</b>/Flask</a></li>
    <li><a href="#java-3" data-toggle="tab"><b>Java</b>/Spring</a></li>
    <li><a href="#php-3" data-toggle="tab"><b>PHP</b>/Slim</a></li>
    <li><a href="#node-3" data-toggle="tab"><b>Node</b>/Express</a></li>
</ul>
<div class="tab-content">

<div role="tabpanel" class="tab-pane active" id="python-3">
<pre><code class="python"># Return a 205
@app.route("/success", methods=["GET"])
def return_success():
    return "This will return a 205 Status Code", 205
    
# Return a 404
@app.route("/fail", methods=["GET"])
def return_fail():
    return "This will return a 404 Status Code", 404
</code></pre>
</div>

<div role="tabpanel" class="tab-pane" id="java-3">
<pre><code class="java">// Return a 205
@RequestMapping(value = "/success", method = RequestMethod.GET)
public ResponseEntity returnSuccess() {
    return ResponseEntity.status(205).body("This will return a 205 Status Code");
}

// Return a 404
@RequestMapping(value = "/fail", method = RequestMethod.GET)
public ResponseEntity returnFail() {
    return ResponseEntity.status(404).body("This will return a 404 Status Code");
}
</code></pre>
</div>

<div role="tabpanel" class="tab-pane" id="php-3">
<pre><code class="php">// Return a 205
$app->get('/success', function (Request $request, Response $response) {
    return $response->write("This will return a 205 Status Code")->withStatus(205);
});

// Return a 404
$app->get('/fail', function (Request $request, Response $response) {
    return $response->write("This will return a 404 Status Code")->withStatus(404);
});
</code></pre>
</div>

<div role="tabpanel" class="tab-pane" id="node-3">
<pre><code class="js">// Return a 205
app.get('/success', function (req, res) {
    res.status(205);
    res.send('This will return a 205 Status Code');
});

// Return a 404
app.get('/fail', function (req, res) {
    res.status(404);
    res.send('This will return a 404 Status Code');
});
</code></pre>
</div>

</div>


## Get Data to Return

Often APIs are stateless, meaning that they get the data from somewhere. You aren't going to be storing data in data structures as your long term storage. Because of that you'll often interact with Databases. Each language works really well with a number of frameworks. I will recommend some good ORMs for each language below, but you should do your research to find one that works for your use case.

<ul id="requestTypes" class="nav nav-tabs">
    <li class="active"><a href="#python-4" data-toggle="tab"><b>Python</b>/Flask</a></li>
    <li><a href="#java-4" data-toggle="tab"><b>Java</b>/Spring</a></li>
    <li><a href="#php-4" data-toggle="tab"><b>PHP</b>/Slim</a></li>
    <li><a href="#node-4" data-toggle="tab"><b>Node</b>/Express</a></li>
</ul>
<div class="tab-content">

<div role="tabpanel" class="tab-pane active" id="python-4">

<b>Recommended ORMs:</b>
<ul>
<li><a href="https://www.sqlalchemy.org/">SqlAlchemy</a> (<a href="http://flask-sqlalchemy.pocoo.org/">Flask SqlAlchemy</a>)</li>
<li><a href="https://www.djangoproject.com/">Django</a></li>
</ul>

</div>

<div role="tabpanel" class="tab-pane" id="java-4">

<b>Recommended ORMs:</b>
<ul>
<li><a href="http://hibernate.org/orm/">Hibernate</a></li>
</ul>
</div>

<div role="tabpanel" class="tab-pane" id="php-4">

<b>Recommended ORMs:</b>
<ul>
<li><a href="http://www.doctrine-project.org/projects/orm.html">Doctrine ORM</a></li>
<li><a href="https://redbeanphp.com/">RedBeanPHP</a></li>
</ul>
</div>

<div role="tabpanel" class="tab-pane" id="node-4">

<b>Recommended ORMs:</b>
<ul>
<li><a href="http://docs.sequelizejs.com/">Sequelize</a></li>
</ul>
</div>

</div>