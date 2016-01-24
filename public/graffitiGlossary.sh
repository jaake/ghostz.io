#!/bin/bash

wget=/usr/bin/wget

if ! $wget "http://en.wikipedia.org/wiki/Glossary_of_graffiti"; then
	echo "ERROR: can't get the thing" >&2
	exit 1
fi

if ! echo "$(grep "<dl>\*</dl>" Glossary_of_graffiti)"; then
	echo "ERROR: grep broke" >&2
	exit 1
fi


