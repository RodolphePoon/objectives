require('json')
require('date')
file = File.read('data/input.json')
data_hash = JSON.parse(file)
objectives=data_hash["objectives"]
records=data_hash["progress_records"]

progress_records=[]
for x in records
	for y in objectives
		if x["objective_id"]==y["id"]
			x1=Date.parse(y["start_date"])
			x2=Date.parse(y["end_date"])
			x3=Date.parse(x["date"])

			y1=y["start"]
			y2=y["target"]
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
	end
end




puts JSON.pretty_generate({progress_records:progress_records})