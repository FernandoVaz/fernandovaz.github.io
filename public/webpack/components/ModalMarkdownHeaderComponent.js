import React, { Component } from 'react';
class ModalMarkdownHeaderComponent extends Component {
        render() {
        return (
            <div>
                <button id="markdownHeaderButton">Open Examples</button>

                <div id="markdownHeaderModal" class="markdownHeaderModal">
                    <div class="markdownHeaderModal-content">
                        <span class="close">&times;</span>
                        <p>This component will represent the expandable test from markdown examples</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalMarkdownHeaderComponent;