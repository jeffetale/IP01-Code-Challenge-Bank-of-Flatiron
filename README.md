#  Flat Iron Bank

This mini web app displays bank transactions with their dates, descriptions, categories and amount. The app also allows users to add new transactions, filter transactions by searching their decription and it permits deleting of transactions.

## Getting Started

Once you have cloned the repo to your machine, you can "npm start" in your terminal to start the app in development and view it in your browser. You can also view the app directly on your browser by clicking on this link https://zippy-profiterole-f1a020.netlify.app/.

## DATABASE

The app fetches transaction data from a db.json file in the public directory. The db.json file contains an array of transaction objects, each having the following properties:

id: Unique identifier for the transaction.
date: Date of the transaction.
description: Description of the transaction.
category: Category of the transaction.
amount: Amount of the transaction.