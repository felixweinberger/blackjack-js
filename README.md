# Blackjack

A simple blackjack game without betting. 

<!-- MarkdownTOC -->

1. [Running the game locally](#running-the-game-locally)
1. [Developing the game](#developing-the-game)

<!-- /MarkdownTOC -->

## Running the game locally

To run the game on your local machine you will need to have [Vagrant](https://www.vagrantup.com/) and [Virtual Box](https://www.virtualbox.org/wiki/Downloads) installed. 

Once that's installed, you can go to the vagrant folder, open a terminal and run `vagrant up`. This can take a few minutes, as the webserver downloads updates and installs apache. 

When the server is up and running, you can point your browser at `localhost:8080` to play the game.

## Developing the game

This repository includes a vagrant configuration. Running `vagrant up` automatically mounts the `app` folder including the necessary files to /var/www/html within the server.

The initialization script initialize.sh takes care of installing the apache webserver as well as zsh for a better command-line interface.