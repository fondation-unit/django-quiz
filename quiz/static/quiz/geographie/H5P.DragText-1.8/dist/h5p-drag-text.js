!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=10)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.curry=function(e){var t=e.length;return function r(){var n=Array.prototype.slice.call(arguments,0);return n.length>=t?e.apply(null,n):function(){var e=Array.prototype.slice.call(arguments,0);return r.apply(null,n.concat(e))}}},o=(t.compose=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})},t.forEach=n(function(e,t){t.forEach(e)}),t.map=n(function(e,t){return t.map(e)}),t.filter=n(function(e,t){return t.filter(e)})),a=(t.some=n(function(e,t){return t.some(e)}),t.contains=n(function(e,t){return-1!=t.indexOf(e)}));t.without=n(function(e,t){return o(function(t){return!a(t,e)},t)}),t.inverseBooleanString=function(e){return("true"!==e).toString()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createElement=t.toggleClass=t.toggleVisibility=t.show=t.hide=t.removeClass=t.addClass=t.classListContains=t.removeChild=t.querySelectorAll=t.nodeListToArray=t.querySelector=t.appendChild=t.toggleAttribute=t.attributeEquals=t.hasAttribute=t.removeAttribute=t.setAttribute=t.getAttribute=void 0;var n=r(0),o=t.getAttribute=(0,n.curry)(function(e,t){return t.getAttribute(e)}),a=t.setAttribute=(0,n.curry)(function(e,t,r){return r.setAttribute(e,t)}),i=(t.removeAttribute=(0,n.curry)(function(e,t){return t.removeAttribute(e)}),t.hasAttribute=(0,n.curry)(function(e,t){return t.hasAttribute(e)}),t.attributeEquals=(0,n.curry)(function(e,t,r){return r.getAttribute(e)===t}),t.toggleAttribute=(0,n.curry)(function(e,t){var r=o(e,t);a(e,(0,n.inverseBooleanString)(r),t)}),t.appendChild=(0,n.curry)(function(e,t){return e.appendChild(t)}),t.querySelector=(0,n.curry)(function(e,t){return t.querySelector(e)}),t.nodeListToArray=function(e){return Array.prototype.slice.call(e)}),s=(t.querySelectorAll=(0,n.curry)(function(e,t){return i(t.querySelectorAll(e))}),t.removeChild=(0,n.curry)(function(e,t){return e.removeChild(t)}),t.classListContains=(0,n.curry)(function(e,t){return t.classList.contains(e)}),t.addClass=(0,n.curry)(function(e,t){return t.classList.add(e)})),l=t.removeClass=(0,n.curry)(function(e,t){return t.classList.remove(e)}),u=t.hide=s("hidden"),c=t.show=l("hidden");t.toggleVisibility=(0,n.curry)(function(e,t){return(e?c:u)(t)}),t.toggleClass=(0,n.curry)(function(e,t,r){r.classList[t?"add":"remove"](e)}),t.createElement=function(e){var t=e.tag,r=e.id,n=e.classes,o=e.attributes,a=document.createElement(t);return r&&(a.id=r),n&&n.forEach(function(e){a.classList.add(e)}),o&&Object.keys(o).forEach(function(e){a.setAttribute(e,o[e])}),a}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t=e.length;return function r(){var n=Array.prototype.slice.call(arguments,0);return n.length>=t?e.apply(null,n):function(){var e=Array.prototype.slice.call(arguments,0);return r.apply(null,n.concat(e))}}},o=function(e,t){return t.substr(0,1)===e},a=function(e,t){return t.substr(-1)===e},i=n(function(e,t){return o(e,t)&&(t=t.slice(1)),a(e,t)&&(t=t.slice(0,-1)),t}),s=function(e){for(var t=e.length;t>0;){var r=Math.floor(Math.random()*t);t--;var n=e[t];e[t]=e[r],e[r]=n}return e},l=function(e){var t=document.createElement("span");return t.innerHTML=e,t};t.default={curry:n,cleanCharacter:i,startsWith:o,endsWith:a,shuffle:s,createElementWithTextPart:l}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(13),a=r(14),i=n(a),s=r(2),l=n(s),u=r(11),c=n(u),d=r(12),p=n(d),h=r(7),g=n(h),b=r(5),f=n(b),m=r(6),v=n(m),y=r(9),D=n(y);H5P.DragText=function(e,t,r){function n(r,n,o){var a=this;this.$=e(this),this.contentId=n,this.contentData=o,t.call(this,"drag-text"),this.params=e.extend(!0,{taskDescription:"Set in adjectives in the following sentence",textField:"This is a *nice*, *flexible* content type, which allows you to highlight all the *wonderful* words in this *exciting* sentence.\nThis is another line of *fantastic* text.",overallFeedback:[],checkAnswer:"Check",tryAgain:"Retry",behaviour:{enableRetry:!0,enableSolutionsButton:!0,enableCheckButton:!0,instantFeedback:!1},showSolution:"Show solution",dropZoneIndex:"Drop Zone @index.",empty:"Empty.",contains:"Drop Zone @index contains draggable @draggable.",draggableIndex:"Draggable. @index of @count.",tipLabel:"Show tip",correctText:"Correct!",incorrectText:"Incorrect!",resetDropTitle:"Reset drop",resetDropDescription:"Are you sure you want to reset this drop zone?",grabbed:"Draggable is grabbed.",cancelledDragging:"Cancelled dragging.",correctAnswer:"Correct answer:",scoreBarLabel:"You got :num out of :total points"},r),this.contentData=o,void 0!==this.contentData&&void 0!==this.contentData.previousState&&void 0!==this.contentData.previousState.length&&(this.previousState=this.contentData.previousState),this.answered=!1,this.instantFeedbackEvaluationFilled=!1,this.textFieldHtml=this.params.textField.replace(/(\r\n|\n|\r)/gm,"<br/>"),this.introductionId="h5p-drag-text-"+n+"-introduction",this.selectedElement=void 0,this.ariaDragControls=new f.default,this.ariaDropControls=new v.default,this.dragControls=new g.default([new D.default,this.ariaDragControls]),this.dragControls.useNegativeTabIndex(),this.dropControls=new g.default([new D.default,this.ariaDropControls]),this.dropControls.useNegativeTabIndex(),this.dragControls.on("before-select",function(e){return!a.isElementDisabled(e.element)}),this.dragControls.on("select",this.keyboardDraggableSelected,this),this.dropControls.on("select",this.keyboardDroppableSelected,this),this.on("start",this.addAllDroppablesToControls,this),this.on("revert",this.removeControlsFromEmptyDropZones,this),this.on("stop",function(e){e.data.target||a.removeControlsFromDropZonesIfAllEmpty()},this),this.on("drop",this.removeControlsFromEmptyDropZones,this),this.on("start",this.toggleDropEffect,this),this.on("stop",this.toggleDropEffect,this),this.on("start",function(e){var t=a.getDraggableByElement(e.data.element);a.setDraggableAriaLabel(t)}),this.on("stop",function(e){var t=a.getDraggableByElement(e.data.element);a.setDraggableAriaLabel(t)}),this.on("start",function(e){return e.data.element.setAttribute("aria-grabbed","true")}),this.on("stop",function(e){return e.data.element.setAttribute("aria-grabbed","false")}),this.on("drop",this.ariaDropControls.setAllToNone,this.ariaDropControls),this.on("drop",function(e){this.dragControls.removeElement(e.data.element)},this),this.on("revert",function(e){this.dragControls.insertElementAt(e.data.element,0)},this),this.on("drop",this.updateDroppableElement,this),this.on("revert",this.updateDroppableElement,this),this.initDragText(),this.stopWatch=new i.default,this.stopWatch.start(),this.on("resize",this.resize,this),this.on("revert",this.toggleDraggablesContainer,this),this.on("drop",this.toggleDraggablesContainer,this),this.on("stop",function(e){e.data.target||a.read(a.params.cancelledDragging)}),this.params.behaviour.instantFeedback&&this.on("revert",function(){return a.instantFeedbackEvaluation()})}return n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.prototype.updateDroppableElement=function(e){var t=e.data.target,r=e.data.element,n=this.getDroppableByElement(t);t&&this.setDroppableLabel(t,r.textContent,n.getIndex())},n.prototype.removeControlsFromDropZonesIfAllEmpty=function(){this.anyDropZoneHasDraggable()||this.removeAllDroppablesFromControls()},n.prototype.removeControlsFromEmptyDropZones=function(){var e=this;this.droppables.filter(function(e){return!e.hasDraggable()}).map(function(e){return e.getElement()}).forEach(function(t){e.dropControls.removeElement(t)})},n.prototype.addAllDroppablesToControls=function(){var e=this;this.dropControls.count()>0&&this.removeAllDroppablesFromControls(),this.droppables.map(function(e){return e.getElement()}).forEach(function(t){return e.dropControls.addElement(t)})},n.prototype.removeAllDroppablesFromControls=function(){var e=this;this.droppables.map(function(e){return e.getElement()}).forEach(function(t){return e.dropControls.removeElement(t)})},n.prototype.anyDropZoneHasDraggable=function(){return this.droppables.some(function(e){return e.hasDraggable()})},n.prototype.setDroppableLabel=function(e,t,r){var n=this.params.dropZoneIndex.replace("@index",r.toString()),o=e.classList.contains("h5p-drag-correct-feedback"),a=e.classList.contains("h5p-drag-wrong-feedback"),i=o||a,s=e.childNodes.length>0;if(e)if(i){var l=this.getDroppableByElement(e),u="";u=o?l.correctFeedback?l.correctFeedback:this.params.correctText:l.incorrectFeedback?l.incorrectFeedback:this.params.incorrectText,e.setAttribute("aria-label",n+" "+this.params.contains.replace("@index",r.toString()).replace("@draggable",t)+" "+u+".")}else s?e.setAttribute("aria-label",n+" "+this.params.contains.replace("@index",r.toString()).replace("@draggable",t)):e.setAttribute("aria-label",n+" "+this.params.empty.replace("@index",r.toString()))},n.prototype.registerDomElements=function(){this.$introduction=e('<p id="'+this.introductionId+'">'+this.params.taskDescription+"</p>"),this.setIntroduction(this.$introduction),this.$introduction.parent().attr("tabindex","-1"),this.setContent(this.$inner),this.addButtons()},n.prototype.initDragText=function(){return this.$inner=e("<div/>",{"aria-describedby":this.introductionId,class:"h5p-drag-inner"}),this.addTaskTo(this.$inner),this.setH5PUserState(),this.$inner},n.prototype.resize=function(){this.changeLayoutToFitWidth()},n.prototype.changeLayoutToFitWidth=function(){var e=this;e.addDropzoneWidth(),e.$inner.width()/parseFloat(e.$inner.css("font-size"),10)>43&&e.widestDraggable<=e.$inner.width()/3?(e.$draggables.addClass("h5p-drag-wide-screen"),e.$wordContainer.detach().appendTo(e.$taskContainer),e.draggables.forEach(function(e){e.getDraggableElement().addClass("h5p-drag-draggable-wide-screen")}),e.$wordContainer.css({"margin-right":e.$draggables.width()})):(e.$wordContainer.css({"margin-right":0}),e.$draggables.removeClass("h5p-drag-wide-screen"),e.$draggables.detach().appendTo(e.$taskContainer),e.draggables.forEach(function(e){e.getDraggableElement().removeClass("h5p-drag-draggable-wide-screen")}))},n.prototype.addButtons=function(){var e=this;e.params.behaviour.enableCheckButton&&e.addButton("check-answer",e.params.checkAnswer,function(){e.answered=!0,e.removeAllElementsFromDragControl(),e.showEvaluation()?(e.hideButton("show-solution"),e.hideButton("try-again"),e.hideButton("check-answer")):(e.params.behaviour.enableRetry&&e.showButton("try-again"),e.params.behaviour.enableSolutionsButton&&e.showButton("show-solution"),e.hideButton("check-answer"),e.disableDraggables()),e.$introduction.parent().focus()},!e.params.behaviour.instantFeedback),e.addButton("show-solution",e.params.showSolution,function(){e.droppables.forEach(function(e){e.showSolution()}),e.draggables.forEach(function(t){return e.setDraggableAriaLabel(t)}),e.disableDraggables(),e.removeAllDroppablesFromControls(),e.hideButton("show-solution")},e.initShowShowSolutionButton||!1),e.addButton("try-again",e.params.tryAgain,function(){e.answered&&e.resetDraggables(),e.answered=!1,e.hideEvaluation(),e.hideExplanation(),e.hideButton("try-again"),e.hideButton("show-solution"),e.params.behaviour.instantFeedback?e.enableAllDropzonesAndDraggables():(e.showButton("check-answer"),e.enableDraggables()),e.hideAllSolutions(),e.stopWatch.reset(),e.read(e.params.taskDescription)},e.initShowTryAgainButton||!1)},n.prototype.removeAllElementsFromDragControl=function(){var e=this;this.dragControls.elements.forEach(function(t){return e.dragControls.removeElement(t)})},n.prototype.keyboardDraggableSelected=function(e){var t=this.selectedElement,r=void 0!==this.selectedElement,n=this.selectedElement===e.element;r&&(this.selectedElement=void 0,this.trigger("stop",{element:t})),r&&n||this.isElementDisabled(e.element)||(this.selectedElement=e.element,this.trigger("start",{element:e.element}),this.focusOnFirstEmptyDropZone())},n.prototype.focusOnFirstEmptyDropZone=function(){var e=this.droppables.filter(function(e){return!e.hasDraggable()})[0],t=e.getElement();this.dropControls.setTabbable(t),t.focus()},n.prototype.isElementDisabled=function(e){return"true"===e.getAttribute("aria-disabled")},n.prototype.keyboardDroppableSelected=function(e){var t=this,r=e.element,n=t.getDroppableByElement(r),o=t.getDraggableByElement(this.selectedElement),a=this.params.behaviour.instantFeedback&&n&&n.isCorrect(),i=!this.params.behaviour.instantFeedback&&n.hasFeedback();if(o&&n&&!a){var s=t.selectedElement;t.drop(o,n),t.selectedElement=void 0,this.trigger("stop",{element:s,target:n.getElement()})}else if(n&&n.hasDraggable()&&!i&&!a){var l=r.querySelector("[aria-grabbed]");this.createConfirmResetDialog(function(){t.revert(t.getDraggableByElement(l))}).show()}},n.prototype.toggleDraggablesContainer=function(){var e=0===this.$draggables.children().length;this.$draggables.toggleClass("hide",e)},n.prototype.createConfirmResetDialog=function(e,t){var n=this,o=new r({headerText:n.params.resetDropTitle,dialogText:n.params.resetDropDescription});return o.appendTo(document.body),o.on("confirmed",e,t||this),o},n.prototype.showDropzoneFeedback=function(){var e=this;this.droppables.forEach(function(t){t.addFeedback();var r=t.containedDraggable;t&&r&&(e.setDroppableLabel(t.getElement(),r.getElement().textContent,t.getIndex()),e.setDraggableAriaLabel(r))})},n.prototype.showExplanation=function(){var e=this,t=[];this.droppables.forEach(function(e){var r=e.containedDraggable;e&&r&&(e.isCorrect()&&e.correctFeedback&&t.push({correct:r.text,text:e.correctFeedback}),!e.isCorrect()&&e.incorrectFeedback&&t.push({correct:e.text,wrong:r.text,text:e.incorrectFeedback}))}),0!==t.length&&this.setExplanation(t,e.params.feedbackHeader)},n.prototype.showEvaluation=function(e){this.hideEvaluation(),this.showDropzoneFeedback(),this.showExplanation();var t=this.calculateScore(),r=this.droppables.length;if(!e){var n=this.createXAPIEventTemplate("answered");this.addQuestionToXAPI(n),this.addResponseToXAPI(n),this.trigger(n)}var o=H5P.Question.determineOverallFeedback(this.params.overallFeedback,t/r).replace(/@score/g,t.toString()).replace(/@total/g,r.toString());return t===r&&(this.hideButton("check-answer"),this.hideButton("show-solution"),this.hideButton("try-again"),this.disableDraggables()),this.trigger("resize"),this.setFeedback(o,t,r,this.params.scoreBarLabel),t===r},n.prototype.calculateScore=function(){return this.droppables.reduce(function(e,t){return e+(t.isCorrect()?1:0)},0)},n.prototype.hideEvaluation=function(){this.removeFeedback(),this.trigger("resize")},n.prototype.hideExplanation=function(){this.setExplanation(),this.trigger("resize")},n.prototype.hideAllSolutions=function(){this.droppables.forEach(function(e){e.hideSolution()}),this.trigger("resize")},n.prototype.addTaskTo=function(t){var r=this;r.widest=0,r.widestDraggable=0,r.droppables=[],r.draggables=[],r.$taskContainer=e("<div/>",{class:"h5p-drag-task"}),r.$draggables=e("<div/>",{class:"h5p-drag-draggables-container"}),r.$wordContainer=e("<div/>",{class:"h5p-drag-droppable-words"}),(0,o.parseText)(r.textFieldHtml).forEach(function(e){if(r.isAnswerPart(e)){var t=(0,o.lex)(e),n=r.createDraggable(t.text),a=r.createDroppable(t.text,t.tip,t.correctFeedback,t.incorrectFeedback);r.params.behaviour.instantFeedback&&n.getDraggableElement().on("dragstop",function(){a.addFeedback(),r.instantFeedbackEvaluation()})}else{var i=l.default.createElementWithTextPart(e);r.$wordContainer.append(i)}}),r.shuffleAndAddDraggables(r.$draggables),r.$draggables.appendTo(r.$taskContainer),r.$wordContainer.appendTo(r.$taskContainer),r.$taskContainer.appendTo(t),r.addDropzoneWidth()},n.prototype.isAnswerPart=function(e){return l.default.startsWith("*",e)&&l.default.endsWith("*",e)},n.prototype.addDropzoneWidth=function(){var e=this,t=0,r=0,n=parseInt(this.$inner.css("font-size"),10),o=3*n,a=n;this.draggables.forEach(function(e){var n=e.getDraggableElement(),o=n.clone().css({position:"absolute","white-space":"nowrap",width:"auto",padding:0,margin:0}).html(e.getAnswerText()).appendTo(n.parent()),i=o.outerWidth();r=i>r?i:r,o.text().length>=20&&(o.html(e.getShortFormat()),i=o.width()),i+a>t&&(t=i+a),o.remove()}),t<o&&(t=o),this.widestDraggable=r,this.widest=t,this.droppables.forEach(function(t){t.getDropzone().width(e.widest)})},n.prototype.createDraggable=function(t){var r=this,n=e("<div/>",{html:t,role:"button","aria-grabbed":"false",tabindex:"-1"}).draggable({revert:function(e){return e||r.revert(o),!1},drag:r.propagateDragEvent("drag",r),start:r.propagateDragEvent("start",r),stop:function(e){r.trigger("stop",{element:o.getElement(),target:e.target})},containment:r.$taskContainer}),o=new c.default(t,n,r.draggables.length);return o.on("addedToZone",function(){r.triggerXAPI("interacted")}),r.draggables.push(o),o},n.prototype.createDroppable=function(t,r,n,o){var a=this,i=this.draggables.length,s=e("<div/>",{class:"h5p-drag-dropzone-container"}),l=e("<div/>",{"aria-dropeffect":"none","aria-label":this.params.dropZoneIndex.replace("@index",i.toString())+" "+this.params.empty.replace("@index",i.toString()),tabindex:"-1"}).appendTo(s).droppable({tolerance:"pointer",drop:function(e,t){var r=a.getDraggableByElement(t.draggable[0]),n=a.getDroppableByElement(e.target);r&&n&&a.drop(r,n)}}),u=new p.default(t,r,n,o,l,s,i,a.params);return u.appendDroppableTo(a.$wordContainer),a.droppables.push(u),u},n.prototype.propagateDragEvent=l.default.curry(function(e,t,r){t.trigger(e,{element:r.target})}),n.prototype.revert=function(e){var t=e.removeFromZone(),r=t?t.getElement():void 0;e.revertDraggableTo(this.$draggables),this.setDraggableAriaLabel(e),this.trigger("revert",{element:e.getElement(),target:r}),this.trigger("resize")},n.prototype.drop=function(e,t){var r=this;r.answered=!0,e.removeFromZone();var n=t.appendInsideDroppableTo(this.$draggables);n&&r.trigger("revert",{element:n.getElement(),target:t.getElement()}),t.setDraggable(e),e.appendDraggableTo(t.getDropzone()),r.params.behaviour.instantFeedback&&(t.addFeedback(),r.instantFeedbackEvaluation(),r.params.behaviour.enableRetry&&!t.isCorrect()||t.disableDropzoneAndContainedDraggable()),this.trigger("drop",{element:e.getElement(),target:t.getElement()}),this.trigger("resize"),t.getElement().focus()},n.prototype.shuffleAndAddDraggables=function(e){var t=this;return l.default.shuffle(this.draggables).map(function(e,t){return e.setIndex(t)}).map(function(r){return t.addDraggableToContainer(e,r)}).map(function(e){return t.setDraggableAriaLabel(e)}).map(function(e){return t.addDraggableToControls(t.dragControls,e)})},n.prototype.setDraggableAriaLabel=function(e){e.text;if(e.isInsideDropZone()){e.getInsideDropzone().getDropzone().attr("aria-label")}var t=this.draggables.length,r=this.params.draggableIndex.replace("@text",e.text).replace("@index",(e.getIndex()+1).toString()).replace("@count",t.toString()),n=this.isGrabbed(e.getElement())?this.params.grabbed:"";return e.$draggable.attr("aria-label",r+" "+n),e},n.prototype.isGrabbed=function(e){return"true"===e.getAttribute("aria-grabbed")},n.prototype.addDraggableToContainer=function(e,t){return t.appendDraggableTo(e),t},n.prototype.addDraggableToControls=function(e,t){return e.addElement(t.getElement()),t},n.prototype.instantFeedbackEvaluation=function(){var e=this;e.isAllAnswersFilled()?(e.params.behaviour.enableSolutionsButton&&e.showButton("show-solution"),e.params.behaviour.enableRetry&&e.showButton("try-again"),e.showEvaluation(!e.instantFeedbackEvaluationFilled),e.instantFeedbackEvaluationFilled=!0):(e.instantFeedbackEvaluationFilled=!1,e.hideButton("try-again"),e.hideButton("show-solution"),e.hideEvaluation())},n.prototype.isAllAnswersFilled=function(){return this.draggables.every(function(e){return e.isInsideDropZone()})},n.prototype.enableAllDropzonesAndDraggables=function(){this.enableDraggables(),this.droppables.forEach(function(e){e.enableDropzone()})},n.prototype.disableDraggables=function(){this.draggables.forEach(function(e){e.disableDraggable()})},n.prototype.enableDraggables=function(){this.draggables.forEach(function(e){e.enableDraggable()})},n.prototype.getAnswerGiven=function(){return this.answered},n.prototype.getScore=function(){return this.calculateScore()},n.prototype.getMaxScore=function(){return this.droppables.length},n.prototype.getTitle=function(){return H5P.createTitle(this.contentData&&this.contentData.metadata&&this.contentData.metadata.title?this.contentData.metadata.title:"Drag the Words")},n.prototype.toggleDropEffect=function(){var e=void 0!==this.selectedElement;this.ariaDropControls[e?"setAllToMove":"setAllToNone"]()},n.prototype.getDraggableByElement=function(e){return this.draggables.filter(function(t){return t.$draggable.get(0)===e},this)[0]},n.prototype.getDroppableByElement=function(e){return this.droppables.filter(function(t){return t.$dropzone.get(0)===e},this)[0]},n.prototype.showSolutions=function(){this.showEvaluation(!0),this.droppables.forEach(function(e){e.addFeedback(),e.showSolution()}),this.removeAllDroppablesFromControls(),this.disableDraggables(),this.hideButton("try-again"),this.hideButton("show-solution"),this.hideButton("check-answer"),this.trigger("resize")},n.prototype.resetTask=function(){var e=this;e.answered=!1,e.instantFeedbackEvaluationFilled=!1,e.resetDraggables(),e.hideEvaluation(),e.enableAllDropzonesAndDraggables(),e.hideButton("try-again"),e.hideButton("show-solution"),e.params.behaviour.instantFeedback||e.showButton("check-answer"),e.hideAllSolutions(),this.trigger("resize")},n.prototype.resetDraggables=function(){l.default.shuffle(this.draggables).forEach(this.revert,this)},n.prototype.getCurrentState=function(){var e=this;if(void 0!==this.draggables)return this.draggables.filter(function(e){return null!==e.getInsideDropzone()}).map(function(t){return{draggable:t.getInitialIndex(),droppable:e.droppables.indexOf(t.getInsideDropzone())}})},n.prototype.setH5PUserState=function(){var e=this,t=this;void 0!==this.previousState&&(this.previousState.forEach(function(r){if(!t.isValidIndex(r.draggable)||!t.isValidIndex(r.droppable))throw new Error("Stored user state is invalid");var n=e.getDraggableByInitialIndex(r.draggable),o=t.droppables[r.droppable];t.drop(n,o),t.params.behaviour.instantFeedback&&(null!==o&&o.addFeedback(),o.isCorrect()&&o.disableDropzoneAndContainedDraggable())}),t.params.behaviour.instantFeedback&&t.isAllAnswersFilled()&&!t.showEvaluation()&&(t.params.behaviour.enableSolutionsButton&&(t.initShowShowSolutionButton=!0),t.params.behaviour.enableRetry&&(t.initShowTryAgainButton=!0)))},n.prototype.isValidIndex=function(e){return!isNaN(e)&&e<this.draggables.length&&e>=0},n.prototype.getDraggableByInitialIndex=function(e){return this.draggables.filter(function(t){return t.hasInitialIndex(e)})[0]},n.prototype.getXAPIData=function(){var e=this.createXAPIEventTemplate("answered");return this.addQuestionToXAPI(e),this.addResponseToXAPI(e),{statement:e.data.statement}},n.prototype.addQuestionToXAPI=function(t){var r=t.getVerifiedStatementValue(["object","definition"]);e.extend(r,this.getxAPIDefinition())},n.prototype.getxAPIDefinition=function(){var e={};e.interactionType="fill-in",e.type="http://adlnet.gov/expapi/activities/cmi.interaction";var t=this.textFieldHtml,r=this.params.taskDescription+"<br/>";return e.description={"en-US":r+this.replaceSolutionsWithBlanks(t)},e.correctResponsesPattern=[this.getSolutionsFromQuestion(t)],e},n.prototype.addResponseToXAPI=function(e){var t,r=this,n=r.getScore(),o=r.droppables.length;e.setScoredResult(n,o,r);var a={min:0,raw:n,max:o,scaled:Math.round(n/o*1e4)/1e4};r.stopWatch&&(t="PT"+r.stopWatch.stop()+"S"),e.data.statement.result={response:r.getXAPIResponse(),score:a,duration:t,completion:!0}},n.prototype.getXAPIResponse=function(){return this.droppables.map(function(e){return e.hasDraggable()?e.containedDraggable.text:""}).join("[,]")},n.prototype.replaceSolutionsWithBlanks=function(e){var t=this;return(0,o.parseText)(e).map(function(e){return t.isAnswerPart(e)?"__________":e}).join("")},n.prototype.getSolutionsFromQuestion=function(e){return(0,o.parseText)(e).filter(this.isAnswerPart).map(function(e){return(0,o.lex)(e)}).map(function(e){return e.text}).join("[,]")},n}(H5P.jQuery,H5P.Question,H5P.ConfirmationDialog),t.default=H5P.DragText},function(e,t){},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(1),i=r(0),s=(0,a.setAttribute)("aria-grabbed"),l=(0,a.attributeEquals)("aria-grabbed","true"),u=(0,i.filter)((0,a.hasAttribute)("aria-grabbed")),c=(0,i.compose)((0,i.forEach)((0,a.setAttribute)("aria-grabbed","false")),u),d=(0,i.compose)((0,i.some)(l),u),p=function(){function e(){n(this,e)}return o(e,[{key:"init",value:function(e){this.controls=e,this.controls.on("select",this.select,this)}},{key:"addElement",value:function(e){s("false",e),this.controls.addElement(e)}},{key:"setAllGrabbedToFalse",value:function(){c(this.controls.elements)}},{key:"hasAnyGrabbed",value:function(){return d(this.controls.elements)}},{key:"select",value:function(e){var t=e.element,r=l(t);this.setAllGrabbedToFalse(),r||s("true",t)}}]),e}();t.default=p},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(1),i=r(0),s=(0,a.setAttribute)("aria-dropeffect","none"),l=(0,a.setAttribute)("aria-dropeffect","move"),u=(0,i.filter)((0,a.hasAttribute)("aria-dropeffect")),c=(0,i.compose)((0,i.forEach)(l),u),d=(0,i.compose)((0,i.forEach)(s),u),p=function(){function e(){n(this,e)}return o(e,[{key:"init",value:function(e){this.controls=e}},{key:"setAllToMove",value:function(){c(this.controls.elements)}},{key:"setAllToNone",value:function(){d(this.controls.elements)}}]),e}();t.default=p,p.DropEffect={COPY:"copy",MOVE:"move",EXECUTE:"execute",POPUP:"popup",NONE:"none"}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(1),s=r(0),l=r(8),u=(0,i.removeAttribute)("tabindex"),c=((0,s.forEach)(u),(0,i.setAttribute)("tabindex","0")),d=(0,i.setAttribute)("tabindex","-1"),p=(0,i.hasAttribute)("tabindex"),h=function(){function e(t){n(this,e),o(this,(0,l.Eventful)()),this.plugins=t||[],this.elements=[],this.negativeTabIndexAllowed=!1,this.on("nextElement",this.nextElement,this),this.on("previousElement",this.previousElement,this),this.initPlugins()}return a(e,[{key:"addElement",value:function(e){this.elements.push(e),this.firesEvent("addElement",e),1===this.elements.length&&this.setTabbable(e)}},{key:"insertElementAt",value:function(e,t){this.elements.splice(t,0,e),this.firesEvent("addElement",e),1===this.elements.length&&this.setTabbable(e)}},{key:"removeElement",value:function(e){this.elements=(0,s.without)([e],this.elements),p(e)&&(this.setUntabbable(e),this.elements[0]&&this.setTabbable(this.elements[0])),this.firesEvent("removeElement",e)}},{key:"count",value:function(){return this.elements.length}},{key:"firesEvent",value:function(e,t){var r=this.elements.indexOf(t);return this.fire(e,{element:t,index:r,elements:this.elements,oldElement:this.tabbableElement})}},{key:"nextElement",value:function(e){var t=e.index,r=t===this.elements.length-1,n=this.elements[r?0:t+1];this.setTabbable(n),n.focus()}},{key:"setTabbable",value:function(e){(0,s.forEach)(this.setUntabbable.bind(this),this.elements),c(e),this.tabbableElement=e}},{key:"setUntabbable",value:function(e){this.negativeTabIndexAllowed?d(e):u(e)}},{key:"previousElement",value:function(e){var t=e.index,r=0===t,n=this.elements[r?this.elements.length-1:t-1];this.setTabbable(n),n.focus()}},{key:"useNegativeTabIndex",value:function(){this.negativeTabIndexAllowed=!0,this.elements.forEach(function(e){e.hasAttribute("tabindex")||d(e)})}},{key:"initPlugins",value:function(){this.plugins.forEach(function(e){void 0!==e.init&&e.init(this)},this)}}]),e}();t.default=h},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.Eventful=function(){return{listeners:{},on:function(e,t,r){var n={listener:t,scope:r};return this.listeners[e]=this.listeners[e]||[],this.listeners[e].push(n),this},fire:function(e,t){return(this.listeners[e]||[]).every(function(e){return!1!==e.listener.call(e.scope||this,t)})},propagate:function(e,t){var r=this;e.forEach(function(e){return t.on(e,function(t){return r.fire(e,t)})})}}}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=function(){function e(){n(this,e),this.selectability=!0}return o(e,[{key:"init",value:function(e){this.boundHandleKeyDown=this.handleKeyDown.bind(this),this.controls=e,this.controls.on("addElement",this.listenForKeyDown,this),this.controls.on("removeElement",this.removeKeyDownListener,this)}},{key:"listenForKeyDown",value:function(e){e.element.addEventListener("keydown",this.boundHandleKeyDown)}},{key:"removeKeyDownListener",value:function(e){e.element.removeEventListener("keydown",this.boundHandleKeyDown)}},{key:"handleKeyDown",value:function(e){switch(e.which){case 13:case 32:this.select(e.target),e.preventDefault();break;case 37:case 38:this.hasChromevoxModifiers(e)||(this.previousElement(e.target),e.preventDefault());break;case 39:case 40:this.hasChromevoxModifiers(e)||(this.nextElement(e.target),e.preventDefault())}}},{key:"hasChromevoxModifiers",value:function(e){return e.shiftKey||e.ctrlKey}},{key:"previousElement",value:function(e){this.controls.firesEvent("previousElement",e)}},{key:"nextElement",value:function(e){this.controls.firesEvent("nextElement",e)}},{key:"select",value:function(e){this.selectability&&!1!==this.controls.firesEvent("before-select",e)&&(this.controls.firesEvent("select",e),this.controls.firesEvent("after-select",e))}},{key:"disableSelectability",value:function(){this.selectability=!1}},{key:"enableSelectability",value:function(){this.selectability=!0}}]),e}();t.default=a},function(e,t,r){"use strict";r(4),H5P=H5P||{},H5P.DragText=r(3).default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),H5P.TextDraggable=function(e){function t(t,r,n){H5P.EventDispatcher.call(this);var o=this;o.text=t,o.insideDropzone=null,o.$draggable=e(r),o.index=n,o.initialIndex=n,o.shortFormat=o.text,o.shortFormat.length>20&&(o.shortFormat=o.shortFormat.slice(0,17)+"...")}return t.prototype=Object.create(H5P.EventDispatcher.prototype),t.prototype.constructor=t,t.prototype.getIndex=function(){return this.index},t.prototype.setIndex=function(e){return this.index=e,this},t.prototype.getInitialIndex=function(){return this.initialIndex},t.prototype.hasInitialIndex=function(e){return this.initialIndex===e},t.prototype.appendDraggableTo=function(e){this.$draggable.detach().css({left:0,top:0}).appendTo(e)},t.prototype.revertDraggableTo=function(e){var t=this.$draggable.offset().left-e.offset().left,r=this.$draggable.offset().top-e.offset().top;this.$draggable.detach().prependTo(e).css({left:t,top:r}).animate({left:0,top:0})},t.prototype.toggleDroppedFeedback=function(e){e?this.$draggable.addClass("h5p-drag-dropped"):this.$draggable.removeClass("h5p-drag-dropped")},t.prototype.disableDraggable=function(){this.$draggable.draggable({disabled:!0})},t.prototype.enableDraggable=function(){this.$draggable.draggable({disabled:!1})},t.prototype.getDraggableElement=function(){return this.$draggable},t.prototype.getElement=function(){return this.$draggable.get(0)},t.prototype.removeFromZone=function(){var e=this.insideDropzone;return null!==this.insideDropzone&&(this.insideDropzone.removeFeedback(),this.insideDropzone.removeDraggable()),this.toggleDroppedFeedback(!1),this.removeShortFormat(),this.insideDropzone=null,e},t.prototype.addToZone=function(e){null!==this.insideDropzone&&this.insideDropzone.removeDraggable(),this.toggleDroppedFeedback(!0),this.insideDropzone=e,this.setShortFormat(),this.trigger("addedToZone")},t.prototype.getAnswerText=function(){return this.text},t.prototype.setShortFormat=function(){this.$draggable.html(this.shortFormat)},t.prototype.getShortFormat=function(){return this.shortFormat},t.prototype.removeShortFormat=function(){this.$draggable.html(this.text)},t.prototype.getInsideDropzone=function(){return this.insideDropzone},t.prototype.isInsideDropZone=function(){return!!this.insideDropzone},t}(H5P.jQuery),t.default=H5P.TextDraggable},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),H5P.TextDroppable=function(e){function t(t,n,o,a,i,s,l,u){var c=this;c.text=t,c.tip=n,c.correctFeedback=o,c.incorrectFeedback=a,c.index=l,c.params=u,c.containedDraggable=null,c.$dropzone=e(i),c.$dropzoneContainer=e(s),c.tip&&(c.$tip=H5P.JoubelUI.createTip(c.tip,{tipLabel:c.params.tipLabel}),c.$tip.attr("tabindex","-1"),c.$dropzoneContainer.append(c.$tip),c.$dropzone.focus(function(){return c.$tip.attr("tabindex","0")}),c.$dropzone.blur(function(){return c.removeTipTabIndexIfNoFocus()}),c.$tip.blur(function(){return c.removeTipTabIndexIfNoFocus()})),c.$incorrectText=e("<div/>",{html:c.params.incorrectText+" "+c.params.correctAnswer,class:"correct-answer"}),c.$correctText=e("<div/>",{html:c.params.correctText,class:"correct-answer"}),c.$showSolution=e("<div/>",{class:r}).appendTo(c.$dropzoneContainer).hide()}var r="h5p-drag-show-solution-container",n="h5p-drag-correct-feedback",o="h5p-drag-wrong-feedback";return t.prototype.removeTipTabIndexIfNoFocus=function(){var e=this;setTimeout(function(){e.$dropzone.is(":focus")||e.$tip.is(":focus")||e.$tip.attr("tabindex","-1")},0)},t.prototype.showSolution=function(){null===this.containedDraggable||this.containedDraggable.getAnswerText()!==this.text?(this.$showSolution.html(this.text),this.$showSolution.prepend(this.$incorrectText)):this.$showSolution.prepend(this.$correctText),this.$showSolution.show()},t.prototype.hideSolution=function(){this.$showSolution.html(""),this.$showSolution.hide()},t.prototype.getElement=function(){return this.$dropzone.get(0)},t.prototype.appendDroppableTo=function(e){this.$dropzoneContainer.appendTo(e)},t.prototype.appendInsideDroppableTo=function(e){if(null!==this.containedDraggable)return this.containedDraggable.revertDraggableTo(e),this.containedDraggable},t.prototype.setDraggable=function(e){var t=this;t.containedDraggable!==e&&(null!==t.containedDraggable&&t.containedDraggable.removeFromZone(),t.containedDraggable=e,e.addToZone(t))},t.prototype.hasDraggable=function(){return!!this.containedDraggable},t.prototype.removeDraggable=function(){null!==this.containedDraggable&&(this.containedDraggable=null)},t.prototype.isCorrect=function(){return null!==this.containedDraggable&&this.containedDraggable.getAnswerText()===this.text},t.prototype.addFeedback=function(){this.isCorrect()?(this.$dropzone.removeClass(o).addClass(n),this.containedDraggable.getDraggableElement().removeClass("h5p-drag-draggable-wrong").addClass("h5p-drag-draggable-correct")):null===this.containedDraggable?this.$dropzone.removeClass(o).removeClass(n):(this.$dropzone.removeClass(n).addClass(o),null!==this.containedDraggable&&this.containedDraggable.getDraggableElement().addClass("h5p-drag-draggable-wrong").removeClass("h5p-drag-draggable-correct"))},t.prototype.removeFeedback=function(){this.$dropzone.removeClass(o).removeClass(n),null!==this.containedDraggable&&this.containedDraggable.getDraggableElement().removeClass("h5p-drag-draggable-wrong").removeClass("h5p-drag-draggable-correct")},t.prototype.hasFeedback=function(){return this.$dropzone.hasClass(o)||this.$dropzone.hasClass(n)},t.prototype.setShortFormat=function(){null!==this.containedDraggable&&this.containedDraggable.setShortFormat()},t.prototype.disableDropzoneAndContainedDraggable=function(){null!==this.containedDraggable&&this.containedDraggable.disableDraggable(),this.$dropzone.droppable({disabled:!0})},t.prototype.enableDropzone=function(){this.$dropzone.droppable({disabled:!1})},t.prototype.removeShortFormat=function(){null!==this.containedDraggable&&this.containedDraggable.removeShortFormat()},t.prototype.getDropzone=function(){return this.$dropzone},t.prototype.getIndex=function(){return this.index},t}(H5P.jQuery),t.default=H5P.TextDroppable},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.lex=t.parseText=void 0;var n=r(2),o=function(e){return e&&e.__esModule?e:{default:e}}(n),a=function(e){return e.split(/(\*.*?\*)/).filter(function(e){return e.length>0})},i=function(e){var t=e.match(/(:([^\\*]+))/g),r=e.match(/(\\\+([^\\*:]+))/g),n=e.match(/(\\\-([^\\*:]+))/g),a=o.default.cleanCharacter("*",e);return t&&(a=a.replace(t,""),t=t[0].replace(":",""),t=t.replace(/\s+$/,"")),r&&(a=a.replace(r,""),r=r[0].replace("\\+",""),r=r.replace(/\s+$/,"")),n&&(a=a.replace(n,""),n=n[0].replace("\\-",""),n=n.replace(/\s+$/,"")),a=a.replace(/\s+$/,""),{tip:t,correctFeedback:r,incorrectFeedback:n,text:a}};t.parseText=a,t.lex=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=n||{};n.DragText=n.DragText||{},n.DragText.StopWatch=function(){function e(){this.duration=0}return e.prototype.start=function(){return this.startTime=Date.now(),this},e.prototype.stop=function(){return this.duration=this.duration+Date.now()-this.startTime,this.passedTime()},e.prototype.reset=function(){this.duration=0,this.startTime=Date.now()},e.prototype.passedTime=function(){return Math.round(this.duration/10)/100},e}(),t.default=n.DragText.StopWatch}]);