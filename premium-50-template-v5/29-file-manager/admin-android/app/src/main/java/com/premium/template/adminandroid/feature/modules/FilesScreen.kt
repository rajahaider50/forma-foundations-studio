package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun FilesScreen(onCreate:()->Unit){Card{Column{Text("Files");Text("Domain-specific files workflow");Button(onClick=onCreate){Text("Create")}}}}
