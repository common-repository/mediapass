=== Plugin Name ===

Contributors: joehoward, matthewsacks, MediaPass&#8482;
Plugin Name: MediaPass Subscription Plugin
Plugin URI: http://mediapass.com/mp/signup    
Tags: billing, content monetization, earn money, media pass, mediapass, member, membership, monetize, overlay, payments, paywall, premium content, registration, subscribe, subscriptions,
Donate link: http://mediapass.com/mp/signup
Requires at least: 3.0
Tested up to: 3.3.1
Stable tag: 2.1
Version: 2.1

Easily charge for articles, blogs, or videos (and make 3-10x more money) using MediaPass Publisher Dashboard.

== Description ==

For the time being, Mediapass has concentrated our efforts to improving our Publisher Dashboard providing you with a much more robust product, revenue tracking and real time optimization than our WordPress plugin ever could. Our Publisher Dashboard provides the ease of use of a plugin and all the additional features a stand alone product should! Sign up at http://www.mediapass.com/mp/signup  

MediaPass gives hundreds of publishers the easiest way to sell subscriptions to articles, blogs, or videos AND MAKE 3-10x MORE MONEY.  Easily manage subscription pages, or even for specific articles or posts. You can also enable subscriptions by category, tag, and users. Utilizing our WYSIWYG paywall editor, you can easily customize your viewers experience with your paywall. Easily track your growing, recurring revenue online.  Merchant accounts are not required for websites using MediaPass.

== Installation ==

We strongly recommend you use our Publisher Dashboard which can be found here: http://www.mediapass.com/mp/signup

== Frequently Asked Questions ==

The answers to most of your questions can be found here: http://mediapass.com/mp/Faq

If you do not find the answer you're looking for, we provide plenty of information within our Publisher Dashboard which you can sign up for FREE here: http://www.mediapass.com/mp/signup

== Screenshots ==

1. Post editor - Highlight the content you wish to protect, then click on the subscription style you wish to use.
2. Post list - Simply enable subscriptions by post with one click.
3. Category list - Simply enable subscriptions for all posts under a particular category with one click.
4. Pricing configuration - Easily manage your subscription prices all in one place.

== Changelog ==

= Publisher Dashboard =
* http://www.mediapass.com/mp/signup

= 2.1 =
* Major bug fixes.

= 2.02 =
* Minor bug fixes.

= 2.01 =
* Minor bug fixes.

= 2.0 =
* Add more options to enable premium content.

= 1.0 =
* Add Video Overlay option.
* Imported mediapass.com account settings.

= 0.9.5 =
* Upon successful association of MediaPass account with plugin, activate the site and set the default mode to "exclude" to accomodate new defaults
* Remove unused code from menu_default
* Remove old comments regarding unused code removal
* Migrate to production API

= 0.9.4 =
* Enable account deauthorization process.

= 0.9.3 =
* Ajax now validates nonces.  Different nonce seed for each page initiating the action.
* Ajax handlers now validates capabilities.

= 0.9.2 =
* Converted all NONCE generation to MediaPass_Plugin::nonce_for($action_specific_nonce)
* Migrated is_good_post() to is_valid_http_post_action($action_specific_nonce)
* Removed unused code from menu_placement() - page has become purely instructional
* Added icon to main menu
* Updated version to 0.9.2
