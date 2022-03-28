import React from 'react'
import newData from '../NewData'

function Glossary() {
    let letters = newData.glossary[0];
    console.log(letters.a)

    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','q','x','y','z']

    return (
        <div>
            <h1 className="glossary">Glossary</h1>
            <div className="alphabet-sticky">
                <ul className="alphabet-list">
                {alphabet.map( e =>
                    <ul key={e} className="alphabet-each">
                        <a href={`#${e}`}>
                            { e }
                        </a>
                    </ul>
                )}
                </ul>
            </div>
            <div className="letter-container">
                <div className="letter-each" id="a" >
                    <div className="letter">A</div>
                    {letters.a.map( e => 
                        <div key={e.id} className="word-each">
                            <h2>{e.name}</h2>
                            <h4>{e.description}</h4>
                        </div>
                    )}
                </div>

                <div className="letter-each" id="b" >
                    <div className="letter">B</div>
                    {letters.b.map( e => 
                        <div key={e.id} className="word-each">
                            <h2>{e.name}</h2>
                            <h4>{e.description}</h4>
                        </div>
                    )}
                </div>

                <div className="letter-each" id="c" >
                    <div className="letter">C</div>
                    {letters.c.map( e => 
                        <div key={e.id} className="word-each">
                            <h2>{e.name}</h2>
                            <h4>{e.description}</h4>
                        </div>
                    )}
                </div>

                <div className="letter-each" id="d" >
                    <div className="letter">D</div>
                    {letters.d.map( e => 
                        <div key={e.id} className="word-each">
                            <h2>{e.name}</h2>
                            <h4>{e.description}</h4>
                        </div>
                    )}
                </div>

                <div className="letter-each" id="e" >
                    <div className="letter">E</div>
                    {letters.e.map( e => 
                        <div key={e.id} className="word-each">
                            <h2>{e.name}</h2>
                            <h4>{e.description}</h4>
                        </div>
                    )}
                </div>

                <div className="letter-each" id="f" >
                    <div className="letter">F</div>
                    {letters.f.map( e => 
                        <div key={e.id} className="word-each">
                            <h2>{e.name}</h2>
                            <h4>{e.description}</h4>
                        </div>
                    )}
                </div>

                <div className="letter-each" id="g" >
                    <div className="letter">G</div>
                    {letters.g.map( e => 
                        <div key={e.id} className="word-each">
                            <h2>{e.name}</h2>
                            <h4>{e.description}</h4>
                        </div>
                    )}
                </div>

                <div className="letter-each" id="h" >
                    <div className="letter">H</div>
                    {letters.h.map( e => 
                        <div key={e.id} className="word-each">
                            <h2>{e.name}</h2>
                            <h4>{e.description}</h4>
                        </div>
                    )}
                </div>

                <div className="letter-each" id="i" >
                    <div className="letter">I</div>
                    {letters.i.map( e => 
                        <div key={e.id} className="word-each">
                            <h2>{e.name}</h2>
                            <h4>{e.description}</h4>
                        </div>
                    )}
                </div>

                <div className="letter-each" id="j" >
                    <div className="letter">J</div>
                    {letters.j.map( e => 
                        <div key={e.id} className="word-each">
                            <h2>{e.name}</h2>
                            <h4>{e.description}</h4>
                        </div>
                    )}
                </div>

                <div className="letter-each" id="k" >
                    <div className="letter">K</div>
                    {letters.k.map( e => 
                        <div key={e.id} className="word-each">
                            <h2>{e.name}</h2>
                            <h4>{e.description}</h4>
                        </div>
                    )}
                </div>

                <div className="letter-each" id="l" >
                    <div className="letter">L</div>
                    {letters.l.map( e => 
                        <div key={e.id} className="word-each">
                            <h2>{e.name}</h2>
                            <h4>{e.description}</h4>
                        </div>
                    )}
                </div>

                <div className="letter-each" id="m" >
                    <div className="letter">M</div>
                    {letters.m.map( e => 
                        <div key={e.id} className="word-each">
                            <h2>{e.name}</h2>
                            <h4>{e.description}</h4>
                        </div>
                    )}
                </div>

                <div className="letter-each" id="n" >
                    <div className="letter">N</div>
                    {letters.n.map( e => 
                        <div key={e.id} className="word-each">
                            <h2>{e.name}</h2>
                            <h4>{e.description}</h4>
                        </div>
                    )}
                </div>

                <div className="letter-each" id="o" >
                    <div className="letter">O</div>
                    {letters.o.map( e => 
                        <div key={e.id} className="word-each">
                            <h2>{e.name}</h2>
                            <h4>{e.description}</h4>
                        </div>
                    )}
                </div>

                <div className="letter-each" id="p" >
                    <div className="letter">P</div>
                    {letters.p.map( e => 
                        <div key={e.id} className="word-each">
                            <h2>{e.name}</h2>
                            <h4>{e.description}</h4>
                        </div>
                    )}
                </div>

                <div className="letter-each" id="q" >
                    <div className="letter">Q</div>
                    {letters.q.map( e => 
                        <div key={e.id} className="word-each">
                            <h2>{e.name}</h2>
                            <h4>{e.description}</h4>
                        </div>
                    )}
                </div>

                <div className="letter-each" id="r" >
                    <div className="letter">R</div>
                    {letters.r.map( e => 
                        <div key={e.id} className="word-each">
                            <h2>{e.name}</h2>
                            <h4>{e.description}</h4>
                        </div>
                    )}
                </div>

                <div className="letter-each" id="s" >
                    <div className="letter">S</div>
                    {letters.s.map( e => 
                        <div key={e.id} className="word-each">
                            <h2>{e.name}</h2>
                            <h4>{e.description}</h4>
                        </div>
                    )}
                </div>

                <div className="letter-each" id="t" >
                    <div className="letter">T</div>
                    {letters.t.map( e => 
                        <div key={e.id} className="word-each">
                            <h2>{e.name}</h2>
                            <h4>{e.description}</h4>
                        </div>
                    )}
                </div>

                <div className="letter-each" id="u" >
                    <div className="letter">U</div>
                    {letters.u.map( e => 
                        <div key={e.id} className="word-each">
                            <h2>{e.name}</h2>
                            <h4>{e.description}</h4>
                        </div>
                    )}
                </div>

                <div className="letter-each" id="v" >
                    <div className="letter">V</div>
                    {letters.v.map( e => 
                        <div key={e.id} className="word-each">
                            <h2>{e.name}</h2>
                            <h4>{e.description}</h4>
                        </div>
                    )}
                </div>

                <div className="letter-each" id="w" >
                    <div className="letter">W</div>
                    {letters.w.map( e => 
                        <div key={e.id} className="word-each">
                            <h2>{e.name}</h2>
                            <h4>{e.description}</h4>
                        </div>
                    )}
                </div>

                <div className="letter-each" id="x" >
                    <div className="letter">X</div>
                    {letters.x.map( e => 
                        <div key={e.id} className="word-each">
                            <h2>{e.name}</h2>
                            <h4>{e.description}</h4>
                        </div>
                    )}
                </div>

                <div className="letter-each" id="y" >
                    <div className="letter">Y</div>
                    {letters.y.map( e => 
                        <div key={e.id} className="word-each">
                            <h2>{e.name}</h2>
                            <h4>{e.description}</h4>
                        </div>
                    )}
                </div>

                <div className="letter-each" id="z" >
                    <div className="letter">Z</div>
                    {letters.z.map( e => 
                        <div key={e.id} className="word-each">
                            <h2>{e.name}</h2>
                            <h4>{e.description}</h4>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Glossary