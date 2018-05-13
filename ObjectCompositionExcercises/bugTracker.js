function solve() {
    return {
        selector: undefined,
        allReports: new Map,
        id: 0,
        report: function (author, description, reproducible, severity) {
            this.allReports.set(this.id++, {
                author: author,
                description: description,
                reproducible: reproducible,
                severity: severity,
                status: 'Open'
            });
            this.output(this.selector);
        },
        setStatus: function (id, newStatus) {
            let report = this.allReports.get(id);
            report.status = newStatus;
            this.output(this.selector)
        },
        remove: function (id) {
            this.allReports.delete(id);
            this.output(this.selector)
        },
        sort: function (method) {
            method = method.toLowerCase();
            this.allReports = [...this.allReports]
                .sort(function (a, b) {
                    if(method === 'severity'){
                        return a[1].severity - b[1].severity
                    } else if(method === 'author'){
                        return a[1].author.localeCompare(b[1].author)
                    } else {
                        return a[0] - b[0];
                    }
                });
           //for(let [id, report] of arrays) {
           //    this.allReports.delete(id);
           //    this.allReports.set(id, report);
           //}
            this.output(this.selector)
        },
        output: function (selector) {
            $(selector).empty();
            this.selector = selector;
            for(let [id, report] of this.allReports) {
                $(selector).append($('<div>')
                    .attr('id', `report_${id}`)
                    .addClass('report')
                    .append($('<div>')
                        .addClass('body')
                        .append($('<p>')
                            .text(report.description)))
                    .append($('<div>')
                        .addClass('title')
                        .append($('<span>')
                            .addClass('author')
                            .text(`Submitted by: ${report.author}`))
                        .append($('<span>')
                            .addClass('status')
                            .text(`${report.status} | ${report.severity}`))))
            }
        }
    }
}
let solution = solve();
solution.report('kamen', 'kmajahsaijaos', true, 123);
solution.output('#content');
solution.report('bonev', 'kmajahsaijaos', true, 123);
solution.report('aaa', 'kmajahsaijaos', true, 123);
solution.report('www', 'kmajahsaijaos', true, 123);
solution.report('qqqq', 'kmajahsaijaos', true, 123);
solution.report('eeee', 'kmajahsaijaos', true, 123);
solution.sort('author');