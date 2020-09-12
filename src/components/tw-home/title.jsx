import React from 'react';
import {FormattedMessage} from 'react-intl';

import styles from './title.css';

const About = () => (<React.Fragment>
    <div className={styles.title}>
        <h1>TurboWarp</h1>
        <span className={styles.subtitles}>
            <div>
                <FormattedMessage
                    defaultMessage="Unofficial Scratch Mod"
                    description="Text for explaining this is an unofficial mod of scratch on the home page"
                    id="tw.home.mod"
                />
            </div>
            <div>
                <a href="https://github.com/TurboWarp/">
                    <FormattedMessage
                        defaultMessage="Source Code"
                        description="Text for source code link on the home page"
                        id="tw.home.code"
                    />
                </a>
                    &nbsp;-&nbsp;
                <a href="/privacy.html">
                    <FormattedMessage
                        defaultMessage="Privacy"
                        description="Text for privacy policy link on the home page"
                        id="tw.home.privacy"
                    />
                </a>
            </div>
        </span>
    </div>
    <p>This is an experiment that tries to make projects run at 60 FPS without making them run too fast. Don't use it for anything serious yet. I'm just looking for some initial feedback.</p>
    <ul>
        <li>Make sure 60 FPS mode is enabled (alt+click flag)</li>
        <li>Position, direction, and size are interpolated. Pen cannot be interpolated.</li>
        <li>There may be additional input delay.</li>
        <li>Projects may lag more, although, TurboWarp is usually fast enough that this doesn't happen.</li>
        <li>Expect to find bugs. Please report them.</li>
    </ul>
</React.Fragment>);

export default About;
