---
layout: post
title:  "Editor of choice: Webstorm"
date:   2020-06-23 22:40:06 -0300
categories: Jekyll
---
### Preface ###
This first post tells how this blog was made, describing the steps required to build your own!
Well, first of all. If you`re running a blog make sure your host server have the required settings to do so. Mine didn't, hence the recreation problem.
Next, delete your old blog, but save a backup. Just in case.

Now we can get going, the first decision to be made is where to upload your blog, and since I've been using git a while now, found Github-pages to be fantastic choice for the ocasion. This decision is yet to be validated tho.

Having deciding where to host your blog, the next step is to set everything up. I'll call this the headache step.

### Headache step - Setting the Development environment ###
There is no method to ensure a good way to set everything up without major complications. If you found one, i'm sure it will fall short whenever a chain of errors appears as you google things up trying to solve them. I'm not wishing bad things to happen, but in my experience those things DO happen and you better build up some patience before your start this thing.

After deciding where the blog will be hosted, the next step is to decide what kind of tech it will be applied in the case, and since github-pages only accepts static sites, this limits a lot the options. For this particular case i've chosen Jekyll (A ruby gem).

First, you need to set Jekyll up so you can start your blog on a local test environment (Your laptop). First things is to verify what OS you use. If you use Windows, give up. Jk i just have no idea of how to install ruby on windows so i'm not even trying to describe that. If you are a sane person you'll chose Jekyll along with Unix systems because of terminal. In this case i'll use MacOS because its what i have.

To set up Jekyll without major headaches, follow these steps:
* Install Homebrew at [brew.sh][homebrew install]
* Install the latest version of Ruby with your recently installed Homebrew
* Put the latest version of Ruby in your PATH
* Verify Gems with Gems -v
* Install Jekyll with gem install jekyll bundler
* Verify jekyll installation with Jekyll -v


### Cleaning the house step - Setting the Server environment ###
This step is all about setting up your development environment and your host environment, and it is a lot less likely to fail because some of it is already described in the previous step.
Assuming that your repo with your own name is already created, if its not. Create one.

First, clone your repo from github to your local laptop using the command git clone <url>, <url> being the url related to your repository.
Now, navigate through to your clonned folder using cd and ls commands (if you're unfamiliar with terminal, see reference for helpful links). Once you're in the clonned folder. Type `jekyll new .` You may require to force things first, but it is pretty straightforward forcing the installation.

Once completed, your blog will be installed on your local laptop, if nothing went wrong a least (again, for troubleshooting refer to the reference links). To view it, type `jekyll serve` in your terminal and access the following url: `127.0.0.1:4000` This will take your to your newly created blog

Now, the next step is to push the newly created contents to the github website. But first, you must do some changes. In your blog folder (the same one you currently are, if you didn't do anything different). Open the file `Gemfile` and uncomment the github related gem. Make sure it follows the following structure: `gem "github-pages", "206", group: :jekyll_plugins` 
It is important here that you add the version of the gem, at the date of the publication, the latest github pages gem version is 206. You may look up the gem version at [bundler.io][bundler.io].

After setting the Gemfile ready, follow up with the commands: `bundle update` and `bundle install`. To fully know what they do, please refer to the reference links at the end of the description, but they will install the gem you specificied in the Gemfile.`

Once everything is ready push your new blog to the remote repository at github. To do that, just type in the following commands: `git commit -m "some message for the commit"` and `git push -u origin master`. For git instructions follow the blog for updates.


[bundler.io]: https://bundler.io
[homebrew install]: https://brew.sh/
[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
[ref-slackify-1]: https://stackify.com/install-ruby-on-your-mac-everything-you-need-to-get-going/
[ref-jekyllinstall-2]: https://medium.com/20percentwork/creating-your-blog-for-free-using-jekyll-github-pages-dba37272730a
[ref-jekyllwebstorm-3]: https://hadihariri.com/2014/01/04/using-webstorm-to-maintain-a-jekyll-site/
[ref-jekylldocs-4]: https://jekyllrb.com/docs/
[ref-jekyllshowcases-5]: https://jekyllrb.com/showcase/
[ref-jekyll-troubleshooting-6]: https://stackoverflow.com/questions/8146249/jekyll-command-not-found
[ref-jekyll-troubleshooting-7]: https://help.github.com/en/github/working-with-github-pages/about-jekyll-build-errors-for-github-pages-sites
[ref-jekyll-troubleshooting-8]: https://help.github.com/en/github/working-with-github-pages/about-github-pages-and-jekyll
[ref-gitpages-9]: https://jarlowrey.com/blog/github-pages-custom-domain
[ref-gitpagestroubleshooting-10]: https://talk.jekyllrb.com/t/how-to-install-github-pages-with-jekyll/3510
[ref-gitpagestroubleshooting-11]: https://stackoverflow.com/questions/11577147/how-to-fix-http-404-on-github-pages#:~:text=Just%20wait%20about%20ten%20minutes,the%20problem%20at%20their%20end.
[ref-githubpages-12]: https://pages.github.com/