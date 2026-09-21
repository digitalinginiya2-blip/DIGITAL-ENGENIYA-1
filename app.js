<!DOCTYPE html>
<html lang="ha">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DIGITAL Engineer</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', system-ui, sans-serif;
            background: #0a0a0a;
            color: #e8e8e8;
            line-height: 1.6;
        }
        header {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            background: radial-gradient(ellipse at top, #1a1a2e 0%, #0a0a0a 70%);
            padding: 20px;
        }
        .logo {
            font-size: 4.5rem;
            font-weight: 800;
            letter-spacing: 8px;
            background: linear-gradient(90deg, #00d4ff, #7b2cbf);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 10px;
        }
        .tagline {
            font-size: 1.4rem;
            color: #aaa;
            margin-bottom: 40px;
        }
        .btn {
            display: inline-block;
            padding: 14px 36px;
            background: #00d4ff;
            color: #000;
            text-decoration: none;
            font-weight: 700;
            border-radius: 50px;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(0, 212, 255, 0.3);
        }
        section {
            max-width: 800px;
            margin: 0 auto;
            padding: 80px 20px;
        }
        h2 {
            font-size: 2rem;
            margin-bottom: 20px;
            color: #00d4ff;
        }
        footer {
            text-align: center;
            padding: 40px 20px;
            color: #666;
            border-top: 1px solid #222;
        }
    </style>
</head>
<body>
    <header>
        <div class="logo">DIGITAL</div>
        <p class="tagline">Engineer • Builder • Creator</p>
        <a href="#about" class="btn">Gani Game da Ni</a>
    </header>

    <section id="about">
        <h2>Game da Ni</h2>
        <p>
            Ina DIGITAL Engineer. Ina gina apps da websites masu kyau, masu sauri, kuma masu amfani.
            Ina son technology, design, da kuma taimakawa mutane su kawo ra'ayoyinsu gaskiya.
        </p>
    </section>

    <footer>
        © 2026 DIGITAL Engineer. Dukkan haƙƙoƙi na ajiye.
    </footer>
</body>
</html>
