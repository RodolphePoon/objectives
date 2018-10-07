require('json')
require('date')
file = File.read('data/input.json')
data_hash = JSON.parse(file)
objectives=data_hash["objectives"]
records=data_hash["progress_records"]
mileStone=data_hash["milestones"]

newArray=[]
progress_records=[]

for x in objectives
	newArray.push({id:x["id"],date:x["start_date"],value:x["start"]})
	for y in mileStone
		if y["objective_id"]==x["id"]
			newArray.push({id:y["objective_id"],date:y["date"],value:y["target"]})
		end
	end
	newArray.push({id:x["id"],date:x["end_date"],value:x["target"]})
end

for x in records
	min=""
	max=""
	for y in newArray
		if x["objective_id"]==y[:id]
			if Date.parse(x["date"])>Date.parse(y[:date])
				min=y
			elsif max==""
				max=y
			end
		end
	end

	puts min
	puts max

	x1=Date.parse(min[:date])
	x2=Date.parse(max[:date])
	x3=Date.parse(x["date"])

	y1=min[:value]
	y2=max[:value]
	y3=x["value"]

	top=y2-y1
	bot=x2-x1

	coef=top.to_f/bot.to_f
	const=y1

	expectedVal=coef*(x3-x1)+const

	diff=y3-expectedVal

	percentDif=(diff/expectedVal)*100.round
	if y1>y2
		result=-1*percentDif.to_i
	else
		result=percentDif.to_i
	end

	progress_records.push({id:x["id"],progress:result})

end



puts JSON.pretty_generate({progress_records:progress_records})