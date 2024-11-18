# jquery_HTML5_dateHandler
BRIEF: Formats date values (and 'today' and 'now') to dates the HTML5 date control won't complain about

DETAILS

The HTML5 date control is very useful, but a little underpowered. It displays dates in US format, but demands them in ISO format, and doesn't handle it gracefully if you get it wrong.

This plugin changes this behavior by overriding the default .val() function*: if the control is an HTML5 date control, the incoming value is converted to ISO format. If the incoming value can't be converted to a date, it writes a blank value without throwing an error. This plugin is also lighter weight than the jQuery UI date control, or other date controls out there.

The plugin also accepts:

yesterday
today
tomorrow
+n[mdy] 
  [mdy] = month, day, or year
  e.g. +10d (plus 10 days), -14d (minus 14 days), +7y (plus 7 years)


* Yeah, I know, some schools of thought discourage this. You don't have to use it if you don't want to. It's okay. I won't be mad.
