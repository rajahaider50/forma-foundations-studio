package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun AuthorsScreen(onCreate:()->Unit){Card{Column{Text("Authors");Text("Domain-specific authors workflow");Button(onClick=onCreate){Text("Create")}}}}
