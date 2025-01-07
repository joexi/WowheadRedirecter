(function() {
    'use strict';

    // Find all links on the page
    const links = document.getElementsByTagName('a');

    // Loop through each link
    for (let link of links) {
        // Check if the link contains wowhead.com/item
        if (link.href.includes('wowhead.com/item')) {
            // Replace with CN version
            link.href = link.href.replace('wowhead.com/item', 'wowhead.com/cn/item');
        }
    }

    // Also handle any dynamically added content using MutationObserver
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes) {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === 1) { // ELEMENT_NODE
                        const newLinks = node.getElementsByTagName('a');
                        for (let link of newLinks) {
                            if (link.href.includes('wowhead.com/item')) {
                                link.href = link.href.replace('wowhead.com/item', 'wowhead.com/cn/item');
                            }
                        }
                    }
                });
            }
        });
    });

    // Start observing the document with the configured parameters
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();