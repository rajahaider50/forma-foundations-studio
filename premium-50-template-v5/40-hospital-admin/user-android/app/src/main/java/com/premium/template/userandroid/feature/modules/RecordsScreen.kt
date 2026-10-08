package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun RecordsScreen(onCreate:()->Unit){Card{Column{Text("Records");Text("Domain-specific records workflow");Button(onClick=onCreate){Text("Create")}}}}
