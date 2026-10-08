package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun FoldersScreen(onCreate:()->Unit){Card{Column{Text("Folders");Text("Domain-specific folders workflow");Button(onClick=onCreate){Text("Create")}}}}
