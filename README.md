# Blackjack

A simple blackjack game without betting. 

Live version currently running [here](blackjack.felixweinberger.com)

<!-- MarkdownTOC -->

1. [How to play](#how-to-play)
    1. [Basics](#basics)
    1. [How a round is played](#how-a-round-is-played)
1. [Running the game locally](#running-the-game-locally)
1. [Developing the game](#developing-the-game)

<!-- /MarkdownTOC -->

## How to play

### Basics

1. This version of Blackjack is played with 6 decks and does not permit betting
1. Aces count as 1 or 11 points (whichever is better), 2-9 count according to their value and 10s and face cards each count 10 points
1. Each hand is valued as the sum of individual cards with the exception of a Blackjack (an ace and any 10-point card)
    + An ace and any 10-point card is ranked higher than any other hands achieving 21 points
1. The objective of the game is to win as many rounds as possible by beating the dealer
1. A round is won by having a total hand value close or at 21 without exceeding 21 __and__ beating the dealer's hand value

### How a round is played

1. Start a new round by pressing 'New round'
1. The dealer reveals one card for himself and 2 for your hand
1. You can choose one of two options:
    + Hit: the dealer deals you an additional card to your hand, increasing your hand value. You may hit until you either choose to stand or exceed 21 in hand value, in which case you lose.
    + Stand: you are no longer dealt additional cards and the dealer draws cards until he has at least 17 points or exceeds 21
1. Once all the cards are dealt, the hand values are scored and the winner is determined
1. You win if:
    + Your hand value does not exceed 21 _and_ your dealer's hand value exceeds 21
    + Your hand value does not exceed 21 _and_ your hand value is higher than the dealer's

## Running the game locally

To run the game on your local machine you will need to have [Vagrant](https://www.vagrantup.com/) and [Virtual Box](https://www.virtualbox.org/wiki/Downloads) installed. 

Once that's installed, you can go to the vagrant folder, open a terminal and run `vagrant up`. This can take a few minutes, as the webserver downloads updates and installs apache. 

When the server is up and running, you can point your browser at `localhost:8080` to play the game.

## Developing the game

This repository includes a vagrant configuration. Running `vagrant up` automatically mounts the `app` folder including the necessary files to /var/www/html within the server.

The initialization script initialize.sh takes care of installing the apache webserver as well as zsh for a better command-line interface.