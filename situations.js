const data = {
    "situations": [
        {
            "id": 0,
            "description": "Você está vagando em um beco ao anoitecer, quando de repente sente uma mão encostar em seu ombro",
            "options": [
                {
                "description": "Você sai correndo",
                "fail": {
                    "damage": 5,
                    "description": "Você tropeça e bate a cabeça com tudo na lama"
                },
                "sucess": {
                    "bonus": 12,
                    "description": "Você consegue chegar com segurança em uma pousada para descansar"
                }
                },
            
                {
                "description": "Você se vira",
                "fail": {
                    "damage": 12,
                    "description": "Você toma um soco na sua face fazendo você desmaiar"
                },
                "sucess": {
                    "bonus": 4,
                    "description": "Você vê que era apenas um amigo distante, ele te oferece seu elmo como presente pelos velhos tempos"
                }
                },
            
            ]

        },
        {
            "id": 1,
            "description": "Você está num mercado quando vê uma senhora ser roubada por dois garotos",
            "options": [{
                "description": "Você persegue os garotos para tentar recuperar os pertences",
                "fail": {
                    "damage": 20,
                    "description": "Os garotos percebem que você os perseguiu, e te acusam de roubar a senhora invertendo a situação"
                },
                "sucess": {
                    "bonus": 25,
                    "description": "Você os golpeia de surpresa e não se machuca"
                }
            },
            
                {
                "description": "Você grita pelos guardas",
                "fail": {
                    "damage": 1,
                    "description": "Os guardas ignoram o seu chamado"
                },
                "sucess": {
                    "bonus": 5,
                    "description": "Os guardas vão até você e vão prender em flagrante os ladrões"
                }
            }
            ]

        },

        {
            "id": 2,
            "description": "Um vilarejo está sofrendo com uma infestação de insetos gigantes",
            "options": [{
                "description": "Você tenta atear fogo neles",
                "fail": {
                    "damage": 30,
                    "description": "Acabou a madeira e o fósforo, a vila teve algumas baixas"
                },
                "sucess": {
                    "bonus": 50,
                    "description": "Você faz coquetel molotov e queima todos eles com ajuda da vila"
                }
            },
            
                {
                "description": "Você foge da vila e deixa todos para trás",
                "fail": {
                    "damage": 100,
                    "description": "No meio do caminho você pisa em uma armadilha e ao anoitecer os insetos te encontram"
                },
                "sucess": {
                    "bonus": 10,
                    "description": "A vila foi destruída e você ficou intacto..."
                }
            }
            ]

        },

        {
            "id": 3,
            "description": "Você descobre que alguém está se passando por você e cometendo pequenos crimes. Antes que seja tarde, você precisa encontrar quem está fazendo isso",
            "options": [{
                "description": "Você começa a perguntar pra todos ao seu redor tudo o que fez nos últimos dias",
                "fail": {
                    "damage": 60,
                    "description": "Te julgam debilidado psicológicamente e te jogam no sanatório"
                },
                "sucess": {
                    "bonus": 50,
                    "description": "Você descobre que seu melhor amigo tem usado suas roupas e ido aos mesmos lugares que você frequenta, você amassa ele"
                }
            },
            
                {
                "description": "Você liga para policia e comenta sobre o caso",
                "fail": {
                    "damage": 40,
                    "description": "Você foi levado para a delegacia"
                },
                "sucess": {
                    "bonus": 80,
                    "description": "Começaram a investigar o caso e você foi tido como inocente"
                }
            }
            ]

        }
    ]
}