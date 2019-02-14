cls
pushd %~dp0
java -jar ../../_closure/compiler.jar ^
--js ../../_closure/goog/base.js ^
--create_source_map source_map ^
--compilation_level ADVANCED_OPTIMIZATIONS ^
--warning_level VERBOSE ^
--language_in ES6_STRICT ^
--language_out ES5_STRICT ^
--generate_exports ^
--export_local_property_definitions ^
--js js/scrollintoview.js ^
--js_output_file js/scrollintoview.min.js
popd