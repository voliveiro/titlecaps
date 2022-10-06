const capitalise_title = () => {
    console.log("submit clicked")
    const title = document.getElementById("title").value
    console.log(title)
    let titleList = title.split(' ')
    let skipwords = ["a", "an", "the", "in", "to", "with", "of", "for", "and", "that", "than", "on"]
    let newTitleList = [] 
    for (const element of titleList) 
        if (skipwords.includes(titleList[titleList.length-1])) {
            let lastword = element.charAt(0).toUpperCase() + element.slice(1)
            newTitleList.push(lastword)
        }
        else if (skipwords.includes(element)) {
            newTitleList.push(element)
        }
        else {
            eachWord = element.charAt(0).toUpperCase() + element.slice(1); 
            newTitleList.push(eachWord)
        }
    let newTitle = ""
    for (const item of newTitleList){
        newTitle = newTitle + " " + item; 
    }
    console.log (newTitle)
    document.getElementById("printresult").innerHTML = newTitle
    return newTitle
}

capitalise_title("Government says to keep dogs in")