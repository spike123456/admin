function urldecode() { : "${*//+/ }"; echo  "${_//%/\\x}"; }
 for file in *
 do
 	if [ "$file" != "rename.sh" ]
	then
 		cd "$file"
 		for f in *
 		do
 			y=$(urldecode "$f")
 			mv "$f" "$y"
 		done
 		cd "../"
  	fi
 done 