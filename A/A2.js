let clb = [
    {
        name: "Arsenal",
        points: 99,
        GD: 45 ,
    },

    {
        name: "Chelsea",
        points: 75,
        GD: 39,
    },

    {
        name: "Manchester United",
        points: 60,
        GD: 29,
    },

    {
        name: "Liverpool",
        points: 88,
        GD: 39,
    }
]
 

function sortrank(clb) {
    clb.sort((a1, a2) => {
        if (a1.points < a2.points) {
            return 1
        }
        else if (a1.points = a2.points) {
            if (a1.GD < a2.GD) {
                return 1
        }
        else if (a1.GD = a2.GD) {
            if (a1.name < a2.name) {
                return 1
                }
            }
        }
    })
clb.push("posittion")
    console.log(clb);
}
sortrank(clb)
