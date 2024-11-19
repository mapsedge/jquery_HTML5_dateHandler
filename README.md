# jquery_HTML5_dateHandler
#BRIEF: Formats date values (and 'today' and 'now') to dates the HTML5 date control won't complain about

#DETAILS

The HTML5 date control is very useful, but a little underpowered. It displays dates in US format, but demands them in ISO format, and doesn't handle it gracefully if you get it wrong.

This plugin changes this behavior by overriding the default .val() function*: if the control is an HTML5 date control, the incoming value is converted to ISO format. If the incoming value can't be converted to a date, it writes a blank value without throwing an error. At 1.2kb minimized, this plugin is also lighter weight than the jQuery UI date control, or other date controls out there. 2.8km un-minimized.

Non-date controls are unaffected.

The plugin also accepts:

    yesterday

    today

    tomorrow

    +n[mdy] 

    [mdy] = month, day, or year
  
    e.g. +10d (plus 10 days), -14d (minus 14 days), +7y (plus 7 years)

#Usage

Just include the script in your project. Use the val function as normal.

    $("#myDateControl").val('11/15/2023')

    $("#myDateControl").val('2022-05-15')

    $("#myDateControl").val('today') // today's date

    $("#myDateControl").val('pepperoni') // blank

    $("#firstname").val("Roger") // not a date control, so operates normally

* Yeah, I know, some schools of thought discourage this. You don't have to use it if you don't want to. It's okay. I won't be mad.
